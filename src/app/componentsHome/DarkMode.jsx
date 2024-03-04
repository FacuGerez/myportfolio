import {useState} from "react";

export function DarkMode() {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <>
            <button onClick={()=>{setDarkMode(!darkMode)}}>
                {darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            </button>
        </>
    )
}