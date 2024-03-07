"use client"
import "../styleComponents/navbar.css"
import Link from "next/link";
import {DarkMode} from "@/components/DarkMode";

export function NavBar() {

    return (
        <header className={"headerFixed"} >
            <nav className={"navbar"}>
                <Link href={"/"}>
                    Home
                </Link>
                <Link href={"/@about"}>
                    About me
                </Link>
                <Link href={"/@skills"}>
                    Skills
                </Link>
                <Link href={"/@contact"}>
                    Contact
                </Link>
                <DarkMode/>
            </nav>
        </header>
    )
}