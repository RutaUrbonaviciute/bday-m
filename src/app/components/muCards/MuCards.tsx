import Image from "next/image";
import styles from "./muCards.module.css";

interface MuWish {
  player: string;
  wish: string;
}

interface MuCardsProps {
  wishes: MuWish[];
}

const getImageName = (playerName: string) => {
  const firstName = playerName.split(" ")[0];
  switch (firstName) {
    case "Luke":
      return "luke.jpeg";
    case "Lisandro":
      return "lisandro.jpeg";
    case "André":
      return "andre.jpeg";
    case "Erik":
      return "eric.jpeg";
    case "Ruben":
      return "ruben.jpeg";
    default:
      return `${firstName.toLowerCase()}.webp`;
  }
};

export const MuCards = ({ wishes }: MuCardsProps) => {
  return (
    <div className={styles.wishesContainer}>
      {wishes.map((wish, index) => (
        <div key={index} className={styles.cardWrapper}>
          <div className={styles.avatarWrapper}>
            <Image
              src={`/${getImageName(wish.player)}`}
              alt={wish.player}
              width={100}
              height={100}
              className={styles.avatar}
            />
            <h3 className={styles.cardTitle}>{wish.player}</h3>
            <p className={styles.wishText}>{wish.wish}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
