import WebImg1 from "../assets/To-Do-App.png"
import WebImg2 from "../assets/User-Card.png"
import WebImg3 from "../assets/Weather-App.png"
export const Projects = () => {
    return (
        <section id="projects" className="flex flex-col px-5 py-32 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-[#2b2d77] mb-5 w-[140px] font-bold">Projects</h1>
                    <p>These are some of my best projects. I have built these with React.Check them out</p>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col md:flex-row  gap-5 px-10">
                    <a target="_blank" href="https://actodo-ah2z.vercel.app/">
                    <div className="relative">
                        <img className="h-[200px] w-[500px] " src={WebImg1} alt="To-Do-App" />
                        <div className="project-desc">
                            <p className="text-center px-5 py-5">A To-Do List Application Built with Front End Application</p>
                            
                        </div>
                    </div>
                    </a>
                    <a target="_blank" href="https://usercard-xi.vercel.app/">
                    <div className="relative">
                        <img className="h-[200px] w-[500px]" src={WebImg2} alt="User-card" />
                        <div className="project-desc">
                            <p className="text-center px-5 py-5">A Simple User Card Application Built with Front End Application</p>
                        </div>
                    </div>
                    </a>
                    <a  target="_blank" href="https://weather-app-stgp.vercel.app/">
                    <div className="relative">
                        <img className="h-[200px] w-[500px]" src={WebImg3} alt="Weather App" />
                        <div className="project-desc">
                            <p className="text-center px-5 py-5">A Weather Application Built with Front End Application</p>
                        </div>
                    </div>
                    </a>

                </div>

            </div>
        </section>
    )
}
