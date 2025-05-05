"use client";
import styles from "./err.module.css";

export const ErrorBox: React.FC<{ text: string }> = ({ text }) => {
  return <p className={styles.error_message}>{text}</p>;
};
