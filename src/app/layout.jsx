import { Inter } from "next/font/google";
import "./globals.css";
import {NavBar} from "@/app/componentsHome/NavBar";

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
        {contact}
        {portfolio}
        {skills}
      </body>
    </html>
  );
}
