"use client";
import { useState, FormEvent } from "react";
import styles from "./form.module.css";
import Image from "next/image";
import { ErrorBox } from "../errorBox/ErrorBox";
import { useRouter } from "next/navigation";

export const Form = () => {
  const router = useRouter();
  const [eyeClosed, setEyeClosed] = useState(true);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [ruta, setRuta] = useState<string>("");
  const [err, setError] = useState({
    nameErr: false,
    rutaErr: false,
    passErr: false,
    ageErr: false,
  });
  const ainiusValidation = ["Ainius", "ainius"];
  const passValidation = ["megsturuta", "MegstuRuta", "megstuRuta"];
  const correctName = ainiusValidation.includes(name);

  const handleValidation = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      passErr: !passValidation.includes(pass),
      ageErr: age !== "29",
      nameErr: !correctName,
      rutaErr: ![
        "Ruta",
        "ruta",
        "rutele",
        "Ugne",
        "ugne",
        "Inga",
        "inga",
      ].includes(ruta),
    };

    setError(newErrors);

    // If all validations pass, redirect to birthday page
    if (!Object.values(newErrors).some((value) => value)) {
      router.push("/linkejimas");
    }
  };

  return (
    <div className={styles.login_box}>
      <h1>Prisijunk</h1>
      <div className={styles.photo_container}>
        {correctName && age === "29" ? (
          <Image
            src="/hat.svg"
            alt="hat"
            width={80}
            height={90}
            style={{
              position: "absolute",
              top: "-40px",
              right: "80px",
              transform: "rotate(40deg)",
            }}
          />
        ) : null}
        {eyeClosed ? (
          <Image
            src="/closed.jpg"
            alt="eye"
            width={150}
            height={150}
            quality={100}
            style={{
              filter: correctName ? "none" : "blur(10px)",
              width: "150px",
              height: "150px",
              objectFit: "cover",
            }}
          />
        ) : (
          <Image
            src="/open.jpg"
            alt="eye"
            width={150}
            height={150}
            quality={100}
            style={{
              filter: correctName ? "none" : "blur(10px)",
              width: "150px",
              height: "150px",
              objectFit: "cover",
            }}
          />
        )}
      </div>
      <form onSubmit={handleValidation}>
        <div className={styles.user_box}>
          <input
            type="text"
            name=""
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <label>Vardas</label>
          {err.nameErr ? <ErrorBox text="🙄 Koks tavo tikras vardas?" /> : null}
        </div>
        <div className={styles.user_box}>
          <input
            type="number"
            name=""
            required
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <label>Kiek tau metų?</label>
          {err.ageErr ? <ErrorBox text="🤨 Tau ne tiek metu..." /> : null}
        </div>
        <div className={styles.user_box}>
          <input
            type="text"
            name=""
            required
            value={ruta}
            onChange={(e) => {
              setRuta(e.target.value);
            }}
          />
          <label>Šauniausios merginos vardas</label>
          {err.rutaErr ? <ErrorBox text="😔 sad..." /> : null}
        </div>
        <div className={styles.user_box}>
          <input
            type={eyeClosed ? "password" : "text"}
            name=""
            required
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <label>Slaptažodis</label>
          {err.passErr ? <ErrorBox text="nooopee.." /> : null}
          <div className={styles.eye} onClick={() => setEyeClosed(!eyeClosed)}>
            {eyeClosed ? (
              <Image
                className={styles.balloon1}
                src="/eye_closed.svg"
                alt="eye closed"
                width={28}
                height={28}
                priority
                style={{ width: "28px", height: "28px" }}
              />
            ) : (
              <Image
                className={styles.balloon1}
                src="/eye_open.svg"
                alt="eye open"
                width={28}
                height={28}
                priority
                style={{ width: "28px", height: "28px" }}
              />
            )}
          </div>
        </div>
        <button className={styles.login} type="submit">
          Norėčiau prisijungti
        </button>
      </form>
      {Object.values(err).some((value) => value) && window !== undefined ? (
        <div className={styles.gif_container}>
          <Image
            src="/images/shallNot.gif"
            alt="You shall not pass!"
            width={300}
            height={150}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "300px",
              margin: "0 auto",
            }}
            unoptimized
          />
        </div>
      ) : null}
    </div>
  );
};
