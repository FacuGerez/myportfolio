import Homepage from "@/app/pages/Homepage";
import Skills from "@/app/pages/Skills";
import About from "@/app/pages/About";
import Portfolio from "@/app/pages/Portfolio";
import Contact from "@/app/pages/Contact";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import {NavBar} from "@/components/NavBar";
export default function Home() {
  return (
      <>
          <Homepage/>
          <NavBar/>
          <About/>
          <Skills/>
          <Portfolio/>
          <Contact/>
      </>

  );
}
