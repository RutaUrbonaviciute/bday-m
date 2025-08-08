import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./birthdayCards.module.css";

interface SpecialCard {
  id: number;
  title: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  isFirstCard?: boolean;
  isSlideshow?: boolean;
  slideshowImages?: string[];
  text: string[];
  style?: React.CSSProperties;
}

interface BirthdayCardsProps {
  cards: SpecialCard[];
  currentCardIndex: number;
  slideDirection: string;
  onPrevCard: () => void;
  onNextCard: () => void;
}

export const BirthdayCards = ({
  cards,
  currentCardIndex,
  slideDirection,
  onPrevCard,
  onNextCard,
}: BirthdayCardsProps) => {
  const [videoLoading, setVideoLoading] = useState<{ [key: number]: boolean }>({});
  const [videoError, setVideoError] = useState<{ [key: number]: boolean }>({});
  
  // Preload next and previous images for better performance
  const nextIndex = (currentCardIndex + 1) % cards.length;
  const prevIndex = currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1;
  
  // Preload videos for slideshow cards
  useEffect(() => {
    cards.forEach((card, index) => {
      if (card.isSlideshow) {
        setVideoLoading(prev => ({ ...prev, [index]: true }));
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.onloadedmetadata = () => {
          setVideoLoading(prev => ({ ...prev, [index]: false }));
        };
        video.onerror = () => {
          setVideoError(prev => ({ ...prev, [index]: true }));
          setVideoLoading(prev => ({ ...prev, [index]: false }));
        };
        video.src = card.image;
      }
    });
  }, [cards]);
  
  return (
    <>
      {/* Preload next and previous images for better performance */}
      <link rel="preload" as="image" href={cards[nextIndex].image} />
      <link rel="preload" as="image" href={cards[prevIndex].image} />
      {/* Preload current video if it's a slideshow */}
      {cards[currentCardIndex].isSlideshow && (
        <link rel="preload" as="video" href={cards[currentCardIndex].image} />
      )}
      <div
        className={`${styles.cardWrapper} ${
          styles[`slide${slideDirection === "right" ? "InRight" : "InLeft"}`]
        }`}
      >
        <div>
          {cards[currentCardIndex].isFirstCard ? (
            <div className={styles.avatarWrapper}>
              <Image
                src={cards[currentCardIndex].image}
                alt={cards[currentCardIndex].title}
                width={600}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className={styles.specialAvatar}
                style={{ objectFit: "cover" }}
                priority
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <h3 className={styles.cardTitleFirst}>
                sakei nenori dovanų, tai padarėm kažką rankų darbo 💖
              </h3>
            </div>
          ) : (
            <>
              {cards[currentCardIndex].isSlideshow ? (
                <div className={styles.avatarWrapper}>
                  {videoLoading[currentCardIndex] && (
                    <div className={styles.videoLoader}>
                      <div className={styles.spinner}></div>
                      <p>Loading video...</p>
                    </div>
                  )}
                  {videoError[currentCardIndex] && (
                    <div className={styles.videoError}>
                      <p>Video failed to load</p>
                    </div>
                  )}
                  <video
                    src={cards[currentCardIndex].image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster=""
                    className={`${cards[currentCardIndex].title === "Alcengeriai" ? styles.paddingRight : ""} ${videoLoading[currentCardIndex] ? styles.videoHidden : ""}`}    
                    style={{ maxWidth: "500px", width: "100%" }}
                    onLoadedMetadata={() => setVideoLoading(prev => ({ ...prev, [currentCardIndex]: false }))}
                    onCanPlay={() => setVideoLoading(prev => ({ ...prev, [currentCardIndex]: false }))}
                    onError={() => {
                      setVideoError(prev => ({ ...prev, [currentCardIndex]: true }));
                      setVideoLoading(prev => ({ ...prev, [currentCardIndex]: false }));
                    }}
                  />
                  <div className={styles.textContainer}>
                    <h3
                      className={styles.cardTitle}
                      data-title={cards[currentCardIndex].title}
                    >
                      {cards[currentCardIndex].title}
                    </h3>
                    <div className={styles.wishBubble}>
                      {cards[currentCardIndex].text.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.avatarWrapper}>
                  <Image
                    src={cards[currentCardIndex].image}
                    alt={cards[currentCardIndex].title}
                    width={600}
                    height={600}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className={styles.specialAvatar}
                    style={{
                      objectFit: "cover",
                    }}
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    unoptimized={cards[currentCardIndex].id === 11}
                  />
                  <div className={styles.textContainer}>
                    <h3
                      className={styles.cardTitle}
                      data-title={cards[currentCardIndex].title}
                    >
                      {cards[currentCardIndex].title}
                    </h3>
                    {cards[currentCardIndex].text.length > 0 && (
                      <div className={styles.wishBubble}>
                        {cards[currentCardIndex].text.map(
                          (paragraph, index) => (
                            <p
                              key={index}
                              style={{
                                wordBreak:
                                  cards[currentCardIndex].id === 2
                                    ? "break-all"
                                    : "normal",
                              }}
                            >
                              {paragraph}
                            </p>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <button className={styles.navButton} onClick={onPrevCard}>
          <span className={styles.arrowLeft}>‹</span>
        </button>
        <button className={styles.navButton} onClick={onNextCard}>
          <span className={styles.arrowRight}>›</span>
        </button>
      </div>
    </>
  );
};
