//import {ParticlesBackground} from "@/components/ParticlesBackground";
import {ButtonTransparent} from "@/components/ButtonTransparent";
import "./../stylePages/home.css"
import Image from "next/image";
import image from "./../../../public/avatar.png"
import 'animate.css';

export default function Homepage() {
    return (
      <div className={"pages " + "home"} id={"Home"}>
        {/*<ParticlesBackground number={64}/>*/}
        <div className={"container"}>
          <div className={"container-descriptions"}>
            <div className={"container-descriptions-header"}>
            <span>
              <h1>F</h1>
              <h1>u</h1>
              <h1>l</h1>
              <h1>l</h1>
              <span>  </span>
              <h1>S</h1>
              <h1>t</h1>
              <h1>a</h1>
              <h1>c</h1>
              <h1>k</h1>
              <span>  </span>
              <h1>D</h1>
              <h1>e</h1>
              <h1>v</h1>
              <h1>e</h1>
              <h1>l</h1>
              <h1>o</h1>
              <h1>p</h1>
              <h1>e</h1>
              <h1>r</h1>
              <span>  </span>
              <h1>a</h1>
              <h1>n</h1>
              <h1>d</h1>
              <span>  </span>
              <h1>M</h1>
              <h1>o</h1>
              <h1>b</h1>
              <h1>i</h1>
              <h1>l</h1>
              <h1>e</h1>
              <span>  </span>
              <h1>D</h1>
              <h1>e</h1>
              <h1>v</h1>
              <h1>e</h1>
              <h1>l</h1>
              <h1>o</h1>
              <h1>p</h1>
              <h1>e</h1>
              <h1>r</h1>
            </span>
              <br/>
              <h2>Oh Hi!!, I´m</h2>
              <h1>
                <strong>Facundo </strong>
                <strong>Nahuel<br/></strong>
                <strong>Gerez</strong>
              </h1>
            </div>
            <h2>I am a computer engineering student and junior developer in the field of full stack development, mobile
              application development and API development.</h2>
            <ButtonTransparent/>
          </div>
          <Image priority={true} className={"image"} src={image} alt={"My image where im smiling"}/>
        </div>
      </div>
    );
}