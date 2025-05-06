import { useEffect, useState } from "react";
import styles from "./beerConfetti.module.css";

export const BeerConfetti = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      rotation: number;
      scale: number;
      speed: number;
      horizontalSpeed: number;
      wobbleSpeed: number;
      wobbleAmount: number;
    }>
  >([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => {
        const sectionWidth = window.innerWidth / 4;
        const section = Math.floor(i / 5);
        const baseX = section * sectionWidth;

        return {
          id: i,
          x: baseX + Math.random() * sectionWidth,
          y: -100 - Math.random() * 200,
          rotation: Math.random() * 360,
          scale: 1 + Math.random() * 0.5,
          speed: 0.15 + Math.random() * 0.2,
          horizontalSpeed: -1 + Math.random() * 2,
          wobbleSpeed: 0.005 + Math.random() * 0.01,
          wobbleAmount: 1 + Math.random() * 1.5,
        };
      });
      setParticles(newParticles);
    };

    createParticles();

    const interval = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          y: particle.y + particle.speed,
          x:
            particle.x +
            particle.horizontalSpeed +
            Math.sin(particle.y * particle.wobbleSpeed) * particle.wobbleAmount,
          rotation: particle.rotation + 0.3,
        }))
      );
    }, 12);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.beerConfettiContainer}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={styles.beerDrop}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: `rotate(${particle.rotation}deg) scale(${particle.scale})`,
          }}
        >
          🍺
        </div>
      ))}
    </div>
  );
};
