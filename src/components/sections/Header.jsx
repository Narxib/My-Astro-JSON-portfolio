
import Section from "../Section.astro";
import SectionJSX from "../Section.jsx";
import SocialsIcon from "./SocialsIcon.jsx";
import info from "@/cv";
import Location from "../../icons/Location.jsx";
import Reddit from "@/icons/Github.jsx";
import Email from "@/icons/Email.jsx";



export default function Header() {
    const { name, location, socials } = info;
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
                    <div className="flex items-center text-sm">
                        <Location />
                        <p className="pl-2 text-textColor font-cour">
                            {location.city}
                        </p>
                    </div>
                    <div className="mt-4 flex">
                        <SocialsIcon Icon={Reddit} link={info.socials[1].link} client:load />
                        <button className="flex flex-col group rounded-lg transition-all ease-in duration-75 align-middle items-center text-center justify-center">
                            <a className="border-[2px] group-hover:bg-gray-200 border-gray-400 p-1 rounded-lg"
                                title={socials[0].name}
                                href={socials[0].link}>
                                <Email />
                            </a>
                            <div className="invisible mt-2 border-[1px] border-gray-500 rounded-lg bg-gray-100 group-hover:visible">
                                <a className="p-1 text-gray-700" href="/" >Copy</a>
                            </div>
                        </button>
                    </div>
                </div>

                <img
                    className="w-24 h-24 rounded-full"
                    src="https://avatars.githubusercontent.com/u/108269492?v=4"
                    alt="pf"
                />
            </div>
        </SectionJSX>
    )
}

