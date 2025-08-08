"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function AiniusioPrivatumoTaisykles() {
  const router = useRouter();
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(-45deg, #FFC3CC, #D2DB76, #E8F086, #FFC3CC)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 8s ease infinite",
        position: "relative",
      }}
    >
      <style>{`
        @media (max-width: 600px) {
          .ainius-privacy-container {
            padding: 32px 10px !important;
          }
          .back-btn-theme {
            left: 10px !important;
            top: 10px !important;
            padding: 8px 16px !important;
            font-size: 0.95rem !important;
          }
        }
        .back-btn-theme {
          position: absolute;
          top: 32px;
          left: 32px;
          z-index: 10;
          display: inline-block;
          background: linear-gradient(135deg, #9CAD8C 60%, #F1C8CB 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 10px 22px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(156, 173, 140, 0.10);
          transition: background 0.2s, transform 0.2s;
        }
        .back-btn-theme:hover {
          background: linear-gradient(135deg, #F1C8CB 60%, #F6B0BB 100%);
          transform: translateY(-2px) scale(1.03);
        }
      `}</style>
      <button
        className="back-btn-theme"
        onClick={() => router.push("/")}
        type="button"
      >
        ← norėčiau grįžti
      </button>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: 600,
            width: "100%",
            background: "white",
            borderRadius: 18,
            boxShadow: "0 8px 32px rgba(156, 173, 140, 0.18)",
            padding: "48px 32px",
            fontFamily: "Karla, sans-serif",
            color: "#7E8C69",
            textAlign: "left",
            boxSizing: "border-box",
          }}
        >
          <div className="ainius-privacy-container">
            <h1 style={{ color: "#7E8C69", marginBottom: 10 }}>
              Martynos Privatumo Taisyklės
            </h1>
            <h2
              style={{
                color: "#9CAD8C",
                fontWeight: 500,
                fontSize: "1.18rem",
                marginBottom: 18,
              }}
            >
              Aš, kurios yra gimtadienis, sutinku:
            </h2>
            <ul
              style={{
                color: "#7E8C69",
                fontSize: "1.08rem",
                marginBottom: 18,
                paddingLeft: 24,
                lineHeight: 1.7,
              }}
            >
              <li style={{ marginBottom: 8 }}>
                Sutikti savo 29tą gimtadienį su šypsena ir gera nuotaikėle
              </li>
              <li style={{ marginBottom: 8 }}>
                Visus ateinančius metus, iki kol būsiu pasveikintas kitą
                gimtadienį, būti su šypsena ir gera nuotaikėle
              </li>
              <li style={{ marginBottom: 8 }}>
                Sutinku, kad esu šaunių šauniausias
              </li>
              <li style={{ marginBottom: 8 }}>
                Sutinku, kad mano panelė Rūta šaunių šauniausia yra
              </li>
              <li style={{ marginBottom: 8 }}>
                Sutinku toliau gaminti skaniausius grikius savo panelei Rūtai
              </li>
              <li style={{ marginBottom: 8 }}>
                Sutinku, kad kai pagaminu nebūtina suvalgyti visko, nes paskui
                būna bloga
              </li>
              <li style={{ marginBottom: 8 }}>
                Sutinku, kad Rūta yra stipri muay thai preišininkė
              </li>
              <li style={{ marginBottom: 8 }}>
                Sutinku, kad esu labai graži ir elegantška
              </li>
              <li style={{ marginBottom: 8 }}>
                Sutinku, kad Rūta mane mėgsta labiau
              </li>
              <li style={{ marginBottom: 8 }}>
                Sutinku, kad aš, Martyna - esu belekaip gera
                programuotoja, amazing pašnekovė, rūpestinga mergina, labai
                gerai juokauju, dainuoju, šokiu, gerai žaidžiu žaidimus, 
                gaminu skaniai... Viską darysiu ir toliau ir būsiu tokia, nes esu BEST🎈🎂
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
