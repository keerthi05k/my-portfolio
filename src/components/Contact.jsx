import ContactImg from "../assets/contact.png";

export const Contact = () => {
    return (
        <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center" id="contact" >
            <div className="md:w-1/2 flex flex-col">
                <div className="md:w-1/2 flex justify-center">
                    <div className="flex flex-col items-center text-white mt-10">
                        <h1 className="text-4xl border-b-4 border-[#2B2D77] mb-5 w-[170px] font-bold">About Me</h1>
                        <p className="text-justify pb-10">If you want more in details, please contact me</p>
                        <p className="py-2"><span className="font-bold ">Email:</span> keerthanakannan80@gmail.com</p>
                        <p className="py-2"><span className="font-bold ">Phone:</span> +91 6382694741</p>

                    </div>
                </div>


            </div>
            <img className="md:w-1/3" src={ContactImg} alt="HeroImg" />
        </section>
    )
}