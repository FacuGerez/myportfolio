"use client"
import "../styleComponents/navbar.css"
import {DarkMode} from "@/components/DarkMode";
import { useRouter } from 'next/navigation'

export function NavBar() {
    const router = useRouter()
    return (
        <header className={"headerFixed"} >
            <nav className={"navbar"}>
                <button type="button" onClick={() => router.push('#home')}>
                    Home
                </button>
                <button type="button" onClick={() => router.push('#about')}>
                    About
                </button>
                <button type="button" onClick={() => router.push('#skills')}>
                    Skills
                </button>
                <button type="button" onClick={() => router.push('#portfolio')}>
                    Portfolio
                </button>
                <button type="button" onClick={() => router.push('#contact')}>
                    Contact
                </button>
                <DarkMode/>
            </nav>
        </header>
    )
}