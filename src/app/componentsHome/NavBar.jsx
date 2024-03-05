"use client"
import Link from "next/link";
import {DarkMode} from "@/app/componentsHome/DarkMode";

export function NavBar() {
    return (
        <header>
            <nav>
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