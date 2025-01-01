
import Section from "../Section.astro";
import SectionJSX from "../Section.jsx";
import SocialsIcon from "./SocialsIcon.jsx";
import cv from "@/cv";
import Location from "../../icons/Location.jsx";
import Github from "@/icons/Github.jsx";
import Email from "@/icons/Email.jsx";



export default function Header() {

    function copyContent() {
        let text = document.getElementById("email")
        const email = text.attributes.href.value.slice(7, 32)
        navigator.clipboard.writeText(email)
        console.log(email)
    }


    const { name, location, socials } = cv.basics;
    return (
        <SectionJSX>
            <div className="flex justify-between w-full">
                <div className="w-1/2">
                    <h3 className="text-black pb-4 text-wrap text-3xl font-bold">
                        {name}
                    </h3>
                    <p className="text-gray-700 font-bold">
                        Desarrollador full stack autodidacta
                    </p>
                    <div className="flex items-center">
                        <Location />
                        <p className="pl-1 text-textColor text-xs font-mono">
                            {location.city}
                        </p>
                    </div>
                    <div className="mt-4 flex gap-2">
                        <SocialsIcon Icon={Github} link={socials[1].link} />
                        <div className="flex flex-col relative group rounded-lg transition-all ease-in duration-75 align-middle items-center text-center justify-center">
                            <a id="email" className="border-[2px] group-hover:bg-gray-100 border-gray-400 p-1 rounded-lg"
                                title={socials[0].name}
                                href={socials[0].link}>
                                <Email />
                            </a>
                            <div className="invisible  absolute top-9 border-[1px] border-gray-500 rounded-lg bg-gray-100 group-hover:visible">
                                <button onClick={copyContent} className="p-1 text-gray-700" href="/" >Copy</button>
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    className="w-32 h-32"
                    src="https://avatars.githubusercontent.com/u/108269492?v=4"
                    alt="pf"
                />
            </div>
        </SectionJSX>
    )
}

