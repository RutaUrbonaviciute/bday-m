import Image from "next/image";
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
  // Preload next and previous images for better performance
  const nextIndex = (currentCardIndex + 1) % cards.length;
  const prevIndex = currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1;
  
  return (
    <>
      {/* Preload next and previous images for better performance */}
      <link rel="preload" as="image" href={cards[nextIndex].image} />
      <link rel="preload" as="image" href={cards[prevIndex].image} />
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
                  <video
                    src={cards[currentCardIndex].image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={`${cards[currentCardIndex].title === "Alcengeriai" ? styles.paddingRight : ""}`}    
                    style={{ maxWidth: "500px", width: "100%" }}
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
