import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";

export const metadata: Metadata = {
  title: "Ainiaus bday",
  description:
    "aniuso gimtadienis. Su gimtadieniu ainiusai! Džiaukis kol 29! <3",
  icons: {
    icon: [
      {
        url: "/tt.jpg",
        type: "image/jpeg",
        sizes: "32x32",
      },
      {
        url: "/tt.jpg",
        type: "image/jpeg",
        sizes: "16x16",
      },
    ],
    apple: [
      {
        url: "/tt.jpg",
        type: "image/jpeg",
        sizes: "180x180",
      },
    ],
  },
  openGraph: {
    title: "Ainiaus bday",
    description:
      "aniuso gimtadienis. Su gimtadieniu ainiusai! Džiaukis kol 29! <3",
    images: [
      {
        url: "/tt.jpg",
        width: 1200,
        height: 630,
        alt: "Ainiaus Birthday",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ainiaus bday",
    description:
      "aniuso gimtadienis. Su gimtadieniu ainiusai! Džiaukis kol 29! <3",
    images: ["/tt.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/tt.jpg" sizes="any" />
        <link
          rel="apple-touch-icon"
          type="image/jpeg"
          href="/tt.jpg"
          sizes="180x180"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
