"use client"
import "../styleComponents/navbar.css"
import {DarkMode} from "@/components/DarkMode";
import { useRouter } from 'next/navigation'
import {useEffect, useState} from "react";

export const SINGLE_PAGES = ["Home","About","Skills","Portfolio","Contact"]

export function NavBar() {
    let [activo,setActivo] = useState("Home")
    useEffect(() => {
        const handleScroll = () => {
            for (let i = 0; i < SINGLE_PAGES.length; i++) {
                if (window.scrollY < (window.innerHeight * (i+1)) && (window.innerHeight * (i)) <= window.scrollY) {
                    setActivo(SINGLE_PAGES[i])
                    break
                }
            }
        };
        // Attach the event listener
        window.addEventListener("scroll", handleScroll);
        // Remove the event listener on cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        }, []);
    const router = useRouter()
    return (
      <nav className={"navbar"}>
          {SINGLE_PAGES.map((item, index) => (
            <a key={index} type="button" className={activo === SINGLE_PAGES[index] ? "active" : ""}
               href={"#" + SINGLE_PAGES[index]}>
                {SINGLE_PAGES[index]}
            </a>
          ))}
          <DarkMode/>
      </nav>
    )
}