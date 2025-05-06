"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./as-ainius.module.css";

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
          colors={["#7cb9a3", "#5a8db3", "#ffffff", "#2b6cb0"]}
        />
      )}
      <h1 className={styles.title}>SU GIMTADIENIU!</h1>
      <div className={styles.videoContainer}>
        <video
          src="/kryzius.mp4"
          controls
          className={styles.video}
          autoPlay
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
