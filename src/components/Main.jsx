import ProfilePic from "../assets/memoji.png"

const Main = () => {

    return (
        <div className="flex justify-between items-center py-12 my-12">
            {/* for title */}
            <div className=" w-3/4">
                <h1 className="text-4xl font-bold">
                    Backend Developer
                </h1>
                <p className="my-3 text-justify text-base">
                    Hello,  I am Sunny Shankar, an India-based backend developer. I build Production level APIs using Python and NodeJS.
                    <div className="my-1">
                        I'm a full-time Backend Developer at Poonawalla Fincorp in Pune. I am passionate about the Technology and and I enjoy designing web interface.
                    </div>
                    <div className="my-1">
                        Outside of my work-life, I enjoy playing video games, listening to music and hanging out with friends.
                    </div>
                </p>
            </div>
            {/* for img */}
            <div>
                <img className="rounded h-40 w-40 " src={ProfilePic} alt="" />
            </div>
        </div>
    )

}

export default Main