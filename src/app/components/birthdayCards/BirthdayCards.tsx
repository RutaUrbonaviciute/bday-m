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
  return (
    <>
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
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.specialAvatar}
                style={{ objectFit: "cover" }}
                priority
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
                    style={{ maxWidth: "500px", width: "100%",  marginRight:
                      cards[currentCardIndex].title === "Alcengeriai"
                        ? "32px"
                        : "0px", }}
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
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.specialAvatar}
                    style={{
                      objectFit: "cover",
                    }}
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
