import AboutImg from "../assets/About.png";

export const About = () => {
    const config = {
        line1 : "Hi! I'm Keerthana, a passionate Front-End Developer with expertise in building visually appealing and user-friendly web applications. I have a strong foundation in HTML, CSS, JavaScript and modern front-end frameworks like React.js",
        line2 : "My primary focus is on crafting seamless user experiences by combining my technical skills with a keen eye for design. I excel at transforming ideas into functional, responsive, and efficient web solutions. Whether it's designing interactive user interfaces or implementing cutting-edge UI/UX features, I'm driven to create products that delight users.",
        line3 : "Currently, I'm focused on honing my front-end development skills, staying up-to-date with the latest industry trends, and exploring new technologies to enhance my ability to build visually stunning and highly-performant web applications. I'm excited to contribute my front-end expertise to startup teams and tech-driven companies, where I can help drive innovation and deliver exceptional user experiences"

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
