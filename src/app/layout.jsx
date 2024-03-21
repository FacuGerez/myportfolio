import { Inter } from "next/font/google";
import "./globals.css";
import {FooterBackground} from "@/components/FooterBackground";
import {Footer} from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facundo Gerez",
  description: "This is my portfolio where I public my projects and ideas ",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <head>
      <script src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"></script>
    </head>
    <body className={inter.className}>
    {children}
    <FooterBackground><Footer/></FooterBackground>
      </body>
    </html>
  );
}
