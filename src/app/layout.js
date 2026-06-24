import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sayan Das | Portfolio",
  description: "M.Sc. Zoology Student & Machine Learning Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${inconsolata.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
