import {ParticlesBackground} from "@/components/ParticlesBackground";
import {ButtonTransparent} from "@/components/ButtonTransparent";

export default function Homepage() {
    return (
        <div className={"pages"} id={"Home"}>
            <ParticlesBackground number={64}/>
            <h1>Oh Hi!!, I´m <strong>Facundo Nahuel Gerez</strong>.<br/>I´m a Software Developer</h1>
            <ButtonTransparent/>
        </div>
    );
}