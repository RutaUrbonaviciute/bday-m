"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ReactConfetti from "react-confetti";
import { BeerConfetti } from "../components/beerConfetti/BeerConfetti";
import { MuCards } from "../components/muCards/MuCards";
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

interface MuWish {
  player: string;
  wish: string;
}

// Manchester United themed wishes
const muWishes: MuWish[] = [
  {
    player: "Marcus Rashford",
    wish: "Oi mate! Proper buzzing to wish a top Red dev his 29th! Keep coding and supporting United like you score at CS - pure class! 🎯",
  },
  {
    player: "Bruno Fernandes",
    wish: "Ayy bruv! 29 years of pure passion, just like your love for United! Keep smashing it like you smash those League of Legends games! SIUUUU! 🎮",
  },
  {
    player: "Rasmus Højlund",
    wish: "Bloody brilliant birthday to our Danish striker's biggest fan! Let's celebrate with a cold one after you ace that deployment, innit! 🍺",
  },
  {
    player: "Alejandro Garnacho",
    wish: "Mad skills in the code game bruv! 29 looking proper mint! Keep vibing with United and crushing it in CS:GO like a worldie! 🚀",
  },
  {
    player: "Mason Mount",
    wish: "Happy birthday fella! You're as reliable as your git commits! Proper United fan and a beast at League, respect mate! ⚽",
  },
  {
    player: "Casemiro",
    wish: "Oi oi! 'Ave a proper birthday lad! Controlling the midfield like you control that keyboard! Time for a victory beer, innit! 🍺",
  },
  {
    player: "Luke Shaw",
    wish: "Alright mate! 29 years young and still defending United's honor! Bet you're as solid in Counter Strike as our back four! 🛡️",
  },
  {
    player: "Lisandro Martínez",
    wish: "The Butcher 'ere says happy birthday! You slice through code like I slice through attacks! Proper gaming and United mad lad! 🔪",
  },
  {
    player: "André Onana",
    wish: "Safe bruv! Your code's as clean as my sheets! Keep catching them bugs and supporting United! Time for a birthday beer! 🧤",
  },
  {
    player: "Erik ten Hag",
    wish: "Right then! Time for some tactical birthday celebrations! Code like you train, game like you mean it, support United like you live it! 📋",
  },
  {
    player: "Ruben Amorim",
    wish: "Olá mate! As your new gaffer, I can see you've got the United DNA - passion for the code, gaming, and a proper pint! Here's to bringing back the glory days together! GGMU! 🔴",
  },
];

// Add this before specialCards array
const momoImages = Array.from({ length: 10 }, (_, i) => `/momo/${i + 1}.jpeg`);

const specialCards: SpecialCard[] = [
  {
    id: 0,
    title: "GIMTADIENAINIUS",
    image: "/chebra.jpeg",
    imageWidth: 0,
    imageHeight: 0,
    isFirstCard: true,
    text: [
      "Su gimtadieniu, Ainiusai! 🎉",
      "Linkiu tau begalės laimės, džiaugsmo ir šypsenų! Tegul šie metai būna pilni nuotykių ir naujų iššūkių! 🌟",
      "Tau - begalės sėkmės ir meilės! ❤️",
    ],
  },
  {
    id: 1,
    title: "Žygintas",
    image: "/zzygis.jpg",
    imageWidth: 0,
    imageHeight: 0,
    text: [
      "Su gimtadieniu, sugulove. Linkiu, kad ateinantys metai turėtų daug sėkmingų statymų su 257 koeficientu, kad LoL pakiltum virš D4, kad CS pakiltum iki Supreme Master (no fking clue, koks tavo rank&apos;as šiaip), kad pradėtum lengvai lipti į šešetukus, kad su Arnu uždirbtumėt milijonus, kad Rūta ir toliau būtų kantri tavo knarkimams. Ir visų svarbiausia, linkiu daugiau patekti pas mane į psichopatus sąrašus (bet kad tai įvyktų, turėsim daugiau susitikt 😊). Myl ❤️",
    ],
  },
  {
    id: 2,
    title: "Aurimas",
    image: "/aurimas.jpeg",
    imageWidth: 0,
    imageHeight: 0,
    text: ["U3UgR2ltdGFkaWVuaXUhIFNrYW5hd XMgZ2ltdGFkaWVuaW5pbyBhbGF1cyA8Mw=="],
  },
  {
    id: 3,
    title: "Justė",
    image: "/juste.jpeg",
    imageWidth: 0,
    imageHeight: 0,
    text: [
      `Ainiau, linkiu, kad visuomet turėtum draugų, su kuriais galėtum "iškelti ranką"; ir būtum suprastas 😊😊😊`,
    ],
  },
  {
    id: 4,
    title: "Simonas",
    image: "/simas.jpeg",
    imageWidth: 0,
    imageHeight: 0,
    text: [
      "šimto prisitraukimų, tūkstančio atsispaudimų, milijono laimės",
      "Drambliai pavydi tavo didelės širdies - niekad nepamesk šito! ❤️",
    ],
  },
  {
    id: 5,
    title: "Viktorija",
    image: "/vika.jpeg",
    imageWidth: 0,
    imageHeight: 0,
    text: ["CC000817681LT"],
  },
  {
    id: 6,
    title: "Momo",
    image: momoImages[0],
    imageWidth: 0,
    imageHeight: 0,
    isSlideshow: true,
    slideshowImages: momoImages,
    text: [
      "Ainiuxai! Su gimtadieniu sveikinu tave!",
      "Ačiū, kad esi geriausias plaukimo mokytojas ir puikus kelionių draugas. 💖",
      "Neačiū, kad vis dar esi labiausiai mane išgąsdinęs žmogus iš visų visų, kas yra gąsdinę 😔",
      "Linkiu tau daug daug meilės, kad pagaliau turėtum gyvūniuką beždžioniuką, kad niekad nesibaigtų chickenraisai ir changai, kad visada lėktuvuose būtų patogu miegoti ir kad nepamestum savo kaip kelionių influencerio kelio, nes sekėjams jau trūksta kontento!",
      "Ilgiausių metų ir činčin! 🍻✨",
    ],
  },
  {
    id: 7,
    title: "Robke",
    image: "/robke.jpeg",
    imageWidth: 0,
    imageHeight: 0,
    text: [
      "Ainiau,",
      `Ofisiukas be tavęs – kaip kava be kofeino: kažkas vyksta, bet jau nebe tas. Kiekviena diena su tavim ten buvo kaip netikėtas bonusas – truputį darbo, daug juoko ir labai daug "nu, dar po vieną poolą".`,
      "Smagu, kad iš visų užduočių kalnų išlindo draugas, su kuriuo galima ir sudėlioti mintis, ir pasiųsti visas mintis po velniop. Tokių žmonių nedaug – o dar mažiau tokių, kurie net ir po ofiso lieka gyvenime.",
      "Nežinau, ar čia gimtadienio sveikinimas, ar tiesiog gera proga pasakyti – smagu, kad esi. Ir gerai, kad esi būtent toks koks esi. Nereikia nei tobulinimų, nei updeitų!",
    ],
  },
  {
    id: 8,
    title: "Tomas",
    image: "/tomas.jpeg",
    imageWidth: 0,
    imageHeight: 0,
    text: [
      "Sveikinimai Tortadienainiaus proga!",
      "Linkiu, kad kiekviena diena būtų kaip šventė – su šypsena, nuotykiais ir gera muzika fone (taip, Linkin Park vis dar skamba galvoje pagalvojus apie Tave :D).",
      `Tvirtų, sveikų santykių, daug kelionių ten, kur dar nesi buvęs, ir neprarasti to "chill" nusiteikimo, kuris Tave išskiria iš kitų. Tegul Tave visada lydi kolegos-draugai – kaip pats sakei, tada ir dirbti nebereikia.`,
      "Gražios šventės ir dar gražesnių metų!",
    ],
  },
  {
    id: 9,
    title: "Liucija",
    image: "/kilimainius.jpg",
    imageWidth: 0,
    imageHeight: 0,
    text: ["Stay sexy, Gargždų Bieberi ❤️"],
  },
  {
    id: 10,
    title: "Valdas",
    image: "/valdelio.jpg",
    imageWidth: 0,
    imageHeight: 0,
    text: ["linkiu niekad fpl'o nelaimet 🙂 Ainius GAYYYYY"],
  },
  {
    id: 11,
    title: "Rūta",
    image: "/sully.gif",
    imageWidth: 0,
    imageHeight: 0,
    text: ["aš tave labiau 🫰"],
    style: {
      borderRadius: "20px",
      overflow: "hidden",
    },
  },
];

export default function Linkejimas() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [isMuTheme, setIsMuTheme] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );
  const [slideshowIndex, setSlideshowIndex] = useState(0);

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
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  useEffect(() => {
    if (specialCards[currentCardIndex]?.isSlideshow) {
      const interval = setInterval(() => {
        setSlideshowIndex((prev) =>
          prev ===
          (specialCards[currentCardIndex].slideshowImages?.length || 1) - 1
            ? 0
            : prev + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentCardIndex, specialCards]);

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

  const handleThemeChange = () => {
    setIsMuTheme(!isMuTheme);
    setShowConfetti(true);
  };

  return (
    <main className={`${styles.main} ${isMuTheme ? styles.muTheme : ""}`}>
      <div className={styles.logoContainer}>
        <Image
          src={isMuTheme ? "/muu.webp" : "/ainiusas.png"}
          alt={isMuTheme ? "Manchester United Logo" : "Logo"}
          width={150}
          height={150}
          className={styles.logo}
        />
      </div>

      <button onClick={handleThemeChange} className={styles.themeButton}>
        Norėčiau pakeisti temą
      </button>

      {showConfetti && (
        <>
          {!isMuTheme && (
            <ReactConfetti
              width={windowSize.width}
              height={windowSize.height}
              recycle={false}
              numberOfPieces={200}
              gravity={0.2}
              colors={[
                "#FFD700", // Gold
                "#FF69B4", // Hot Pink
                "#00CED1", // Turquoise
                "#FF6B6B", // Coral
                "#98FB98", // Pale Green
                "#DDA0DD", // Plum
                "#87CEEB", // Sky Blue
                "#FFA500", // Orange
                "#9370DB", // Medium Purple
                "#FF1493", // Deep Pink
              ]}
            />
          )}
          {isMuTheme && <BeerConfetti />}
        </>
      )}

      {isMuTheme ? (
        <MuCards wishes={muWishes} />
      ) : (
        <BirthdayCards
          cards={specialCards}
          currentCardIndex={currentCardIndex}
          slideDirection={slideDirection}
          momoImageIndex={slideshowIndex}
          onNextCard={nextCard}
          onPrevCard={prevCard}
        />
      )}
    </main>
  );
}
