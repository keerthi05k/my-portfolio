import ResumeImg from "../assets/resume.png";

export const Resume = () => {
    return (
        <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5 py-32 ">
            <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
                <img className="w-[500px] " src={ResumeImg} alt="ResumeImg" />
            </div>

            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center text-white">
                    <h1 className="text-4xl border-b-4 border-[#5353da] mb-5 w-[135px] font-bold">Resume</h1>
                    <p className="text-justify pb-5">You Can View My Resume <a target="_blank" className="btn" href="https://drive.google.com/file/d/1t1-pg8PmP5LiI4Dm95366j_T5w03_YGa/view?usp=drive_link">Download</a></p>
                </div>
            </div>
        </section>
    )
}
