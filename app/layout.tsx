import type { Metadata } from "next";
import { Sora, Source_Code_Pro, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-code",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "Radoly Tech - Web Development & Blockchain Solutions",
  description:
    "Radoly Tech specializes in game web development, blockchain solutions, 3D modeling, and custom web applications.",
  keywords:
    "web development, blockchain, 3D modeling, game development, tech solutions",
  openGraph: {
    title: "Radoly Tech - Web Development & Blockchain Solutions",
    description:
      "Radoly Tech specializes in game web development, blockchain solutions, 3D modeling, and custom web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-n-8">
      <body
        className={`${sora.variable} ${sourceCodePro.variable} ${spaceGrotesk.variable} font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
