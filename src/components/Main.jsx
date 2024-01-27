import ProfilePic from "../assets/memoji.png"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Main = () => {

    return (
        <div>

            <div className="flex py-12 my-10">
                {/* for title */}
                <div className=" w-3/4">
                    <h1 className="text-4xl font-bold">
                        Backend Developer
                    </h1>
                    <p className="my-3 text-justify text-base">
                        Hello,  I am Sunny Shankar, an India-based backend developer.
                        <div className="my-1">
                            I'm a full-time Backend Developer at Poonawalla Fincorp in Pune. I am passionate about the Technology and and I enjoy designing web interface.
                        </div>
                        <div className="my-1">
                            Outside of my work-life, I enjoy playing video games, listening to music and hanging out with friends.
                        </div>
                    </p>
                    {/* contact  */}
                    <div className="flex my-5 gap-2">
                        <span className="mr-2">
                            <FaGithub className="h-8 w-8 cursor-pointer hover:text-primary" />
                        </span>
                        <span className="mx-2">
                            <FaLinkedin className="h-8 w-8 cursor-pointer hover:text-primary" />
                        </span>

                    </div>
                </div>
                {/* for img */}
                <div className=" pt-6">
                    <img className="rounded h-44  w-44" src={ProfilePic} alt="" />
                </div>
            </div>

            {/* EXPERIENCE and EDUCATION */}
            <div className="">
                {/* EXPERIENCE */}
                <div>
                    <h1 className="font-bold mb-2">Experience</h1>
                    <div className="card rounded-lg bg-neutral text-neutral-content">
                        <div className="card-body">
                            <h2 className="card-title text-sm flex justify-between">
                                Backend Developer
                                [at]
                                <span className="cursor-pointer hover:text-primary">
                                    Poonawalla Fincorp
                                </span>
                            </h2>
                            <p>June 2022 - Present</p>
                        </div>
                    </div>

                </div>

                <div className="divider my-5"></div>

                {/* Education */}
                <div>
                    <h1 className="font-bold mb-2">Education</h1>
                    <div className="card rounded-lg bg-neutral text-neutral-content">
                        <div className="card-body">
                            <h2 className="card-title text-sm flex justify-between">
                                B.E in Computer Science
                                [From]
                                <span className="cursor-pointer hover:text-primary">
                                    Sinhgad Institute of Technology and Science, Pune
                                </span>
                            </h2>
                            <p>2018 - 2022</p>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )

}

export default Main