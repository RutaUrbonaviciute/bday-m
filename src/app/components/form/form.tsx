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
  const [err, setError] = useState({
    nameErr: false,
    passErr: false,
    ageErr: false,
  });
  const [policyChecked, setPolicyChecked] = useState(false);
  const [policyError, setPolicyError] = useState(false);
  const martynaValidation = ["Martyna", "martyna", "Martynka", "MARTYNA", "Martynka", "martynka"];
  const passValidation = [
"kuba",
"kubyte",
"Kuba",
"Kubyte"
  ];
  const correctName = martynaValidation.includes(name);
  const [showPasswordHint, setShowPasswordHint] = useState(false);
  const [showHintConfirmation, setShowHintConfirmation] = useState(false);
  const [hintAttempts, setHintAttempts] = useState(0);
  const maxHintAttempts = 3;

  const handleValidation = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      passErr: !passValidation.includes(pass),
      ageErr: age !== "29",
      nameErr: !correctName,
    };

    setError(newErrors);

    if (!policyChecked) {
      setPolicyError(true);
      return;
    } else {
      setPolicyError(false);
    }

    // If all validations pass, redirect to birthday page
    if (!Object.values(newErrors).some((value) => value)) {
              router.push("/as-martyna");
    }
  };

  const handleForgotPassword = () => {
    if (hintAttempts >= maxHintAttempts) {
      setError((prev) => ({ ...prev, passErr: true }));
      return;
    }
    setShowHintConfirmation(true);
  };

  const handleConfirmHint = () => {
    setShowPasswordHint(true);
    setShowHintConfirmation(false);
    setHintAttempts((prev) => prev + 1);
  };

  const handleCancelHint = () => {
    setShowHintConfirmation(false);
  };

  return (
    <div className={styles.login_box}>
      <h1>Prisijunk</h1>
      <div className={styles.photo_container}>
        {!name ? (
          <Image
            src="/cake.png"
            alt="birthday cake"
            width={150}
            height={150}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "contain",
            }}
          />
        ) : eyeClosed ? (
          <Image
            src="/martyna-2.jpg"
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
            src="/martyna-2.jpg"
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
        {/* <div className={styles.user_box}>
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
        </div> */}
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
          <button
            type="button"
            onClick={handleForgotPassword}
            className={styles.forgotPassword}
          >
            Wtf, aš neįsivaizduoju koks slaptažodis...
          </button>
          {showHintConfirmation && (
            <div className={styles.hintConfirmation}>
              <p>
                Ar tikrai nori užuominos? Gali būti, kad po jos bus dar
                sunkiau...
              </p>
              <div className={styles.hintButtons}>
                <button
                  onClick={handleConfirmHint}
                  className={styles.confirmHint}
                >
                  Taip, duok užuominą
                </button>
                <button
                  onClick={handleCancelHint}
                  className={styles.cancelHint}
                >
                  Ne, pabandysiu dar kartą
                </button>
              </div>
            </div>
          )}
          {showPasswordHint && (
            <div className={styles.passwordHint}>
              <p>
                skamba panašiai kaip Rūtos netflixo slaptažodis, tik tą daryti
                ne netflixą, o Rūtą
              </p>
            </div>
          )}
        </div>
        <div className={styles.privacyRow}>
          <input
            type="checkbox"
            id="policy"
            checked={policyChecked}
            onChange={() => setPolicyChecked((v) => !v)}
          />
          <label htmlFor="policy">
            Sutinku su
            <a
              href="/ainiuso-privatumo-taisykles"
              className={styles.policyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privatumo taisyklėmis
            </a>
          </label>
        </div>
        {policyError && <ErrorBox text="ei ou, nesutikai su taisyklėmis..." />}
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
              // margin: "0 auto",
            }}
            unoptimized
          />
        </div>
      ) : null}
    </div>
  );
};
