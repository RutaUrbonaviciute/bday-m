"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./linkejimas.module.css";
import dynamic from "next/dynamic";

const ReactConfetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

// Custom beer confetti component
const BeerConfetti = () => {
  const [beers, setBeers] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      rotation: number;
      speed: number;
      sway: number;
      size: number;
    }>
  >([]);

  useEffect(() => {
    // Create initial beer elements with more varied positions
    const initialBeers = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -Math.random() * 1000 - 100, // More scattered starting heights
      rotation: Math.random() * 360,
      speed: 4 + Math.random() * 6, // Faster fall speeds
      sway: 1 + Math.random() * 2, // More pronounced sway
      size: 15 + Math.random() * 10, // Random sizes between 15-25px
    }));
    setBeers(initialBeers);

    // Animation loop
    const interval = setInterval(() => {
      setBeers((prevBeers) =>
        prevBeers.map((beer) => ({
          ...beer,
          y: beer.y + beer.speed,
          rotation: beer.rotation + beer.speed * 0.8, // Faster rotation
          x: beer.x + Math.sin(beer.y / 20) * beer.sway, // More pronounced sway
        }))
      );
    }, 30); // Faster update interval

    return () => clearInterval(interval);
  }, []);

  const getOpacity = (y: number) => {
    const fadeStart = window.innerHeight - 200; // Start fading 200px from bottom
    const fadeEnd = window.innerHeight;

    if (y < fadeStart) return 1;
    if (y > fadeEnd) return 0;

    // Calculate opacity based on position in fade zone
    return 1 - (y - fadeStart) / (fadeEnd - fadeStart);
  };

  return (
    <div className={styles.beerConfettiContainer}>
      {beers.map((beer) => (
        <Image
          key={beer.id}
          src="/beer.png"
          alt="Beer"
          width={beer.size}
          height={beer.size}
          style={{
            position: "fixed",
            left: beer.x,
            top: beer.y,
            transform: `rotate(${beer.rotation}deg)`,
            transition: "transform 0.03s linear, opacity 0.2s ease-out",
            zIndex: 1000,
            opacity: getOpacity(beer.y),
          }}
        />
      ))}
    </div>
  );
};

// Birthday wishes
const birthdayWishes = [
  "Gimtadienio proga linkiu tau begalės laimės ir šypsenų! 🎉",
  "Tebūnie šis tavo geriausias gimtadienis! 🎂",
  "Linkiu, kad visi tavo svajonės išsipildytų! ⭐",
  "Tau - begalės džiaugsmo ir meilės! ❤️",
  "Tebūnie šis tavo nuostabus metų pradžia! 🌟",
  "Linkiu tau visko, ko tik nori! 🎁",
  "Tau - begalės smagumo ir linksmybių! 🎈",
  "Tebūnie šis tavo geriausias gimtadienis! 🎊",
  "Linkiu tau visko geriausio! 🌈",
  "Tau - begalės laimės ir džiaugsmo! 🎯",
];

// Manchester United themed wishes
const muWishes = [
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

export default function Linkejimas() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [showConfetti, setShowConfetti] = useState(true);
  const [isMUTheme, setIsMUTheme] = useState(false);
  const [showBeerConfetti, setShowBeerConfetti] = useState(false);

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  // Handle theme change
  const handleThemeChange = () => {
    setIsMUTheme(!isMUTheme);
    if (!isMUTheme) {
      setShowBeerConfetti(true);
      setTimeout(() => setShowBeerConfetti(false), 5000);
    }
  };

  return (
    <div className={`${styles.container} ${isMUTheme ? styles.muTheme : ""}`}>
      <Image
        src={isMUTheme ? "/muu.webp" : "/a.jpg"}
        alt={isMUTheme ? "Manchester United Logo" : "Logo"}
        width={100}
        height={100}
        className={styles.logo}
      />
      <button className={styles.themeButton} onClick={handleThemeChange}>
        Keisti temą
      </button>
      {showConfetti && !isMUTheme && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.2}
          friction={0.97}
          wind={0.01}
          initialVelocityX={4}
          initialVelocityY={10}
          tweenDuration={2000}
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
      {showBeerConfetti && isMUTheme && <BeerConfetti />}
      <div className={styles.content}>
        <h1>
          {isMUTheme
            ? "Oi mate, it's your birthday innit! Bloody brilliant! ⚽🎉"
            : "Su gimtaaaadieniuuuuuuu 🎉"}
        </h1>

        <div className={styles.wishesContainer}>
          {isMUTheme
            ? // Manchester United themed wishes
              muWishes.map((wish, index) => {
                // Handle special cases for image names
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

                return (
                  <div key={index} className={styles.avatarWrapper}>
                    <Image
                      src={`/${getImageName(wish.player)}`}
                      alt={wish.player}
                      width={80}
                      height={80}
                      className={styles.avatar}
                      style={{ objectFit: "cover" }}
                    />
                    <div className={styles.wishBubble}>
                      <p>{`${wish.player}: ${wish.wish}`}</p>
                    </div>
                  </div>
                );
              })
            : // Birthday wishes
              birthdayWishes.map((wish, index) => (
                <div key={index} className={styles.avatarWrapper}>
                  <Image
                    src={
                      index === 0
                        ? "/avatars/avatar1.jpg"
                        : index === 1
                        ? "/avatars/avatar2.jpg"
                        : `/avatars/avatar${index + 1}.jpg`
                    }
                    alt={`Avatar ${index + 1}`}
                    width={80}
                    height={80}
                    className={styles.avatar}
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.wishBubble}>
                    <p>{wish}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
