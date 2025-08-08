"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import { BirthdayCards } from "../components/birthdayCards/BirthdayCards";
import styles from "./linkejimas.module.css";

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


const specialCards: SpecialCard[] = [
  {
    id: 1,
    title: "Goda",
    image: "/godukas.png",
    imageWidth: 0,
    imageHeight: 0,
    text: ["Martyna, nuosirdus sveikinimai"],
  },
  {
    id: 2,
    title: "Ieva",
    image: "/ieva.mp4",
    imageWidth: 0,
    imageHeight: 0,
    isSlideshow: true,
    text: [
      "Martynai linkiu gyvent, gert (bet ne per daug) ir jaust malonumą ❤️",
    ],
  },
  {
    id: 3,
    title: "Jovile",
    image: "/jovile-2.png",
    imageWidth: 0,
    imageHeight: 0,
    text: ["Kad visad būtų ką pakelt ir su kuo pakelt! Būk laiminga! 🍾"],
  },
  {
    id: 4,
    title: "Aiste",
    image: "/aiste.png",
    imageWidth: 0,
    imageHeight: 0,
    text: [
      "esi nuostabus žmogeliukas, kupinas šilumos ir meilės visiems💛. Svajok, mėgaukis gyvenimu ir tegul taure šampano būna visada pilna! 💛",
    ],
  },
  {
    id: 5,
    title: "Egle",
    image: "/egle.png",
    imageWidth: 0,
    imageHeight: 0,
    text: ["gyvent smagiai, pinigų gerai"],
  },
  {
    id: 6,
    title: "Povilas",
    image: "/povilas.png",
    imageWidth: 0,
    imageHeight: 0,
    text: [
      "Miela Martyna, Mylima, maloni, miela, madinga,",
      "Mes linkim magiškų momentų, milžiniškos motyvacijos, margaspalvių minčių, malonių malonumų,",
      "Meilės, malonės, muzikos.",
      "Mėgaukis malonia misija – mylėti gyvenimą!",
    ],
  },
  {
    id: 7,
    title: "Beatrice",
    image: "/beatrice.png",
    imageWidth: 0,
    imageHeight: 0,
    text: [
    "Su gimtadieniu, brangioji! Nuo pat pirmos akimirkos jausmas buvo toks, lyg būtume pažįstamos visą gyvenimą. Tu esi žmogus, su kuriuo gera būti tiesiog savimi. Linkiu tau daug džiaugsmo, šviesos ir meilės – tiek, kiek pati jos dalini kitiems. Ačiū, kad esi. ❤️"
    ],
  },
  {
    id: 7,
    title: "Laurynas",
    image: "/laurynas.png",
    imageWidth: 0,
    imageHeight: 0,
    text: [
      "Martyna, smagu, kad tapai neatsiejama chebros dalis. Linkiu pavaryt darbe ir gyvenime. Tavo metai 💪 HB"
    ],
  },
  {
    id: 7,
    title: "Ruta",
    image: "/ruta.mp4",
    isSlideshow: true,
    imageWidth: 0,
    imageHeight: 0,
    text: [
      "Brangioji, gražiausio gimtadienio ir amazing ateinančių metelių, kad niekad netrūktų gerų prikių ir juoko. Kaip kilo alumni galiu pridurti - kad tu tikrai never kill the vibe :D o tik pridedi chebrytei 1000 vaibo <3"
    ],
  },
  {
    id: 0,
    title: "Alcengeriai",
    image: "/martyna.mp4",
    imageWidth: 0,
    imageHeight: 0,
    isSlideshow: true,
    text: [
      "Linkim ne gyvenimo, o kutenimo",
    ],
  },
];

export default function Linkejimas() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentCardIndex]);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const nextCard = () => {
    setSlideDirection("right");
    setCurrentCardIndex((prev) =>
      prev === specialCards.length - 1 ? 0 : prev + 1
    );
  };

  const prevCard = () => {
    setSlideDirection("left");
    setCurrentCardIndex((prev) =>
      prev === 0 ? specialCards.length - 1 : prev - 1
    );
  };

  return (
    <main className={`${styles.main}`}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src={"/logo.png"}
            alt={"Logo"}
            width={150}
            height={150}
            className={styles.logo}
          />
        </div>
      </div>
        <>
            <ReactConfetti
              width={windowSize.width}
              height={windowSize.height}
              recycle={false}
              numberOfPieces={200}
              gravity={0.2}
              colors={[
                "#FFC3CC", // Soft Pink
                "#D2DB76", // Lime Green
                "#28301C", // Dark Green
                "#FFC3CC", // Soft Pink
                "#D2DB76", // Lime Green
                "#ffffff", // White
                "#FFC3CC", // Soft Pink
                "#D2DB76", // Lime Green
                "#28301C", // Dark Green
                "#FFC3CC", // Soft Pink
              ]}
            />
        </>
    
      <BirthdayCards
        cards={specialCards}
        currentCardIndex={currentCardIndex}
        slideDirection={slideDirection}
        onNextCard={nextCard}
        onPrevCard={prevCard}
      />
    </main>
  );
}
