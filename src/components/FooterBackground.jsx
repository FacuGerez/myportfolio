import "../styleComponents/footer.css"
export function FooterBackground({children}) {
    return (
        <footer>
            <div className={"waves"}>
                <div className={"wave"} id={"wave1"}></div>
                <div className={"wave"} id={"wave2"}></div>
                <div className={"wave"} id={"wave3"}></div>
                <div className={"wave"} id={"wave4"}></div>
            </div>
            <div className={"under_waves"}>
                {children}
            </div>
        </footer>

    )
}