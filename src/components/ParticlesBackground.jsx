import "../styleComponents/particles.css"
export function ParticlesBackground({number}) {
    let animationSpeed = []
    for (let i = 0; i <= number; i++){
        animationSpeed.push({"--i": Math.random()})
    }
    return (
        <div className={"particlesBackground"}>
            {animationSpeed.map((item) => (
                <span style={item}></span>
            ))}
        </div>
    )
}