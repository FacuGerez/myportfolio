import {ButtonTransparent} from "@/components/ButtonTransparent";
import {ParticlesBackground} from "@/components/ParticlesBackground";

export default function Home() {
  return (
      <div className={"pages"}>
          <ParticlesBackground number={64}/>
          <h1>Oh Hi!!, I´m <strong>Facundo Nahuel Gerez</strong>.<br/>I´m a Software Developer</h1>
          <ButtonTransparent/>
      </div>
  );
}
