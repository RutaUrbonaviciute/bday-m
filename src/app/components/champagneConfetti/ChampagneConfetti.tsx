"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./champagneConfetti.module.css";

export const ChampagneConfetti = () => {
  const [champagneItems, setChampagneItems] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      rotation: number;
      animationDelay: number;
      animationDuration: number;
    }>
  >([]);

  useEffect(() => {
    const items = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10,
      rotation: Math.random() * 360,
      animationDelay: Math.random() * 2,
      animationDuration: 3 + Math.random() * 2,
    }));
    setChampagneItems(items);
  }, []);

  return (
    <div className={styles.champagneContainer}>
      {champagneItems.map((item) => (
        <div
          key={item.id}
          className={styles.champagneItem}
          style={{
            left: `${item.x}%`,
            animationDelay: `${item.animationDelay}s`,
            animationDuration: `${item.animationDuration}s`,
            transform: `rotate(${item.rotation}deg)`,
          }}
        >
          <Image
            src="/champagne.png"
            alt="champagne"
            width={30}
            height={60}
            className={styles.champagneImage}
          />
        </div>
      ))}
    </div>
  );
}; 