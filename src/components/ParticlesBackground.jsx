import "../styleComponents/particles.css"
export function ParticlesBackground({number}) {
    let animationSpeed = []
    for (let i = 0; i <= number; i++){
        animationSpeed.push({"--i": Math.random()})
    }
    return (
        <div className={"particlesBackground"}>
            {animationSpeed.map((item, index) => (
                <span style={item} key={index}></span>
            ))}
        </div>
    )
}