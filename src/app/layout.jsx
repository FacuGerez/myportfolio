import { Inter } from "next/font/google";
import "./globals.css";
import {NavBar} from "@/components/NavBar";
import {FooterBackground} from "@/components/FooterBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facundo Gerez",
  description: "This is my portfolio where I public my projects and ideas ",
};

export default function RootLayout({
    children,
    about,
    contact,
    portfolio,
    skills,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <NavBar/>
        {about}
        {skills}
        {portfolio}
        {contact}
        <FooterBackground><h1>Holaaa que ondaaaa</h1></FooterBackground>
      </body>
    </html>
  );
}
