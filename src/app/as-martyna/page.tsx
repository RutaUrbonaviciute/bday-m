"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./as-martyna.module.css";

const ReactConfetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

export default function AsAinius() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Stop confetti after 10 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 10000);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className={styles.main}>
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={200}
          recycle={true}
          gravity={0.2}
          colors={["#FFC3CC", "#D2DB76", "#28301C", "#ffffff", "#FFC3CC", "#D2DB76"]}
        />
      )}
      <h1 className={styles.title}>SU GIMTADIENIU MARTYNA!</h1>
      <div className={styles.videoContainer}>
        <video
          src="/dance.mp4"
          controls
          className={styles.video}
          autoPlay
          playsInline
          loop
          muted
        />
      </div>
      <Link href="/linkejimas" className={styles.ctaButton}>
        norėčiau palinkėjimų
      </Link>
    </main>
  );
}
