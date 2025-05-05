import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";

export const metadata: Metadata = {
  title: "Ainiaus bday",
  description: "Ainiaus webas, nes Ainiaus gimtadienis",
  icons: {
    icon: [
      {
        url: "/a.jpg",
        type: "image/jpeg",
        sizes: "32x32",
      },
      {
        url: "/a.jpg",
        type: "image/jpeg",
        sizes: "16x16",
      },
    ],
    apple: [
      {
        url: "/a.jpg",
        type: "image/jpeg",
        sizes: "180x180",
      },
    ],
  },
  openGraph: {
    title: "Ainiaus bday",
    description: "Ainiaus webas, nes Ainiaus gimtadienis",
    images: [
      {
        url: "/a.jpg",
        width: 1200,
        height: 630,
        alt: "Ainiaus Birthday",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ainiaus bday",
    description: "Ainiaus webas, nes Ainiaus gimtadienis",
    images: ["/a.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/a.jpg" sizes="any" />
        <link
          rel="apple-touch-icon"
          type="image/jpeg"
          href="/a.jpg"
          sizes="180x180"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
