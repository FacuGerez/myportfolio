import Link from "next/link";

export function NavBar() {
    return (
        <header>
            <nav>
                <Link href={"https://www.youtube.com/"}>
                    Redireccion 1
                </Link>
                <Link href={"https://www.youtube.com/"}>
                    Redireccion 2
                </Link>
                <Link href={"https://www.youtube.com/"}>
                    Redireccion 3
                </Link>
                <Link href={"https://www.youtube.com/"}>
                    Redireccion 4
                </Link>
                <Link href={"https://www.youtube.com/"}>
                    Redireccion 5
                </Link>
            </nav>
        </header>
    )
}