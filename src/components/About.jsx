import AboutImg from "../assets/About.png";

export const About = () => {
    const config = {
        line1 : "Hi! I'm Keerthana, a passionate  Full Stack Developer (MERN) with a strong foundation in building visually appealing, user-friendly, and fully functional web applications. I specialize in HTML, CSS, JavaScript (ES6+), React.js, Node.js, Express.js, and MongoDB.",
        line2 : "My primary focus is on crafting seamless user experiences and building scalable backend systems. I enjoy combining clean UI design with efficient server-side logic to bring complete solutions to life — from interactive frontends to robust APIs and database integrations.",
        line3 : "I’m continuously exploring the latest tools and technologies in modern web development, enhancing my skills in REST APIs, Tailwind CSS, Git, and deployment platforms like Vercel and Render. Whether it’s designing responsive interfaces or implementing backend functionalities, I strive to create applications that are both performant and user-centric."

    }
    return (
        <section className="flex flex-col md:flex-row bg-secondary px-5 py-32" id="about">
            <div className="py-5 md:w-1/2"> 
                <img src={AboutImg} alt="AboutImg" />
            </div>

            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center text-white">
                    <h1 className="text-4xl border-b-4 border-[#5353da] mb-5 w-[170px] font-bold">About Me</h1>
                    <p className="text-justify pb-5">{config.line1}</p>
                     <p className="text-justify pb-5">{config.line2}</p>
                      <p className="text-justify pb-5">{config.line3}</p>
                </div>
            </div>
        </section>
    )
}
