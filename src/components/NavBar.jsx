"use client"
import "../styleComponents/navbar.css"
import {DarkMode} from "@/components/DarkMode";
import { useRouter } from 'next/navigation'

export function NavBar() {
    const router = useRouter()
    return (
        <header className={"headerFixed"} >
            <nav className={"navbar"}>
                <button type="button" onClick={() => router.replace('#home')}>
                    Home
                </button>
                <button type="button" onClick={() => router.replace('#about')}>
                    About
                </button>
                <button type="button" onClick={() => router.replace('#skills')}>
                    Skills
                </button>
                <button type="button" onClick={() => router.replace('#portfolio')}>
                    Portfolio
                </button>
                <button type="button" onClick={() => router.replace('#contact')}>
                    Contact
                </button>
                <DarkMode/>
            </nav>
        </header>
    )
}