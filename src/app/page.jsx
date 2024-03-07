import {ButtonTransparent} from "@/components/ButtonTransparent";
import {ParticlesBackground} from "@/components/ParticlesBackground";

export default function Home() {
  return (
      <div className={"pages"}>
          <ParticlesBackground number={98}/>
          <h1>Oh Hi!!, I´m <strong>Facundo Nahuel Gerez</strong>.</h1>
          <h1>I´m a Software Developer.</h1>
          <ButtonTransparent/>
      </div>
  );
}
