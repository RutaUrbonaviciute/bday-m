import Image from "next/image";
import { Form } from "./components/form/form";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div 
      className={styles.page}
    >
      <main 
        className={styles.main}
        style={{ background: 'transparent' }}
      >
        <Form />
      </main>
      <footer 
        className={styles.footer}
      >
        © 2025 Martyna Best. All rights reserved.
      </footer>

      <Image
        className={styles.balloon}
        src="/ballons_1.svg"
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

  
    </div>
  );
}
