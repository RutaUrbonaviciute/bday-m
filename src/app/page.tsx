import Image from "next/image";
import { Form } from "./components/form/form";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Form />
      </main>
      <footer className={styles.footer}>
        © 2025 Ainius Best. All rights reserved.
      </footer>

      <Image
        className={styles.balloon}
        src="/ballons.svg"
        alt="balloon"
        style={{ position: "absolute", bottom: 0, left: 0 }}
        width={150}
        height={200}
      />
      <Image
        className={styles.balloon1}
        src="/ballons_1.svg"
        alt="balloon"
        style={{ position: "absolute", bottom: 0, right: 0 }}
        width={150}
        height={200}
      />

      <Image
        className={styles.garland}
        src="/garland.svg"
        alt="garland"
        style={{
          objectFit: "contain",
          objectPosition: "top",
          position: "absolute",
          top: 0,
          left: "20px",
          overflow: "hidden",
        }}
        width={300}
        height={300}
      />
    </div>
  );
}
