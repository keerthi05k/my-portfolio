import HeroImg from "../assets/Hero.png";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export const Hero = () => {
  const config = {
     subtitle: "Junior FrontEnd Developer and Designer"
  }
  return (
    <section id="hero" className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
        <div className="md:w-1/2 flex flex-col mt-6">
             <h1 className="w-1/2 text-white text-6xl font-hero-font">Hi, <br /> I'm <span className="text-black">Keerthana</span></h1>
             <p className="text-4xl text-white mt-2">{config.subtitle}</p>
         
             <div className="flex gap-4 py-5">
                <a target="_blank" href="https://www.linkedin.com/in/keerthana-kannan05/" className="text-white"><CiLinkedin size={42} /></a>
                <a target="_blank" href="https://github.com/keerthi05k" className="text-white"><FaGithub size={38} /></a>
             </div>
        </div>
        <img className="md:w-1/3" src={HeroImg} alt="HeroImg"/>
    </section>
  )
}
