import {ButtonTransparent} from "@/components/ButtonTransparent";
import {ParticlesBackground} from "@/components/ParticlesBackground";

export default function Home() {
  return (
      <div className={"pages"}>
          <ParticlesBackground number={64}/>
          <h1>HOLA RAMOOOOOOOOOOOOOOON MIRA ESTA PAGINAAAAAAA <strong>Facundo Nahuel Gerez</strong>.<br/>I´m a Software Developer</h1>
          <ButtonTransparent/>
      </div>
  );
}
