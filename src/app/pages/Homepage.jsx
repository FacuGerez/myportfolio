import {ParticlesBackground} from "@/components/ParticlesBackground";
import {ButtonTransparent} from "@/components/ButtonTransparent";
import "./../stylePages/home.css"
import Image from "next/image";
import image from "./../../../public/avatar.png"

export default function Homepage() {
    return (
      <div className={"pages " + "home"} id={"Home"}>
        <ParticlesBackground number={64}/>
        <Image className={"avatar"} src={image} alt={"My image where im smiling"}/>
        <div className={"container-presents"}>
          <h1>Oh Hi!!, I´m <strong>Facundo Nahuel Gerez</strong>.<br/>I´m a Software Developer</h1>
          <ButtonTransparent/>
        </div>
      </div>
    );
}