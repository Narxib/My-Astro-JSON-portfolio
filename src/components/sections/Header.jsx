import Section from "../Section.astro";
import SectionJSX from "../Section.jsx";
import SocialsIcon from "./SocialsIcon.jsx";
import cv from "@/cv";
import Location from "../../icons/Location.jsx";
import Github from "@/icons/Github.jsx";
import Email from "@/icons/Email.jsx";
import Toastify from "toastify-js";

export default function Header({ cv }) {
  function copyContent() {
    let text = document.getElementById("email");
    const email = text.attributes.href.value.slice(7, 32);
    navigator.clipboard.writeText(email);

    Toastify({
      text: "Email copied to clipboard",
      duration: 2000,
      newWindow: true,
      close: true,
      style: {
        background: "white",
        color: "black",
        border: "2px solid black",
        "border-radius": "25px",
      },
      className: "dark:bg-black bg-white dark:text-white dark:border-white",
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover

      onClick: function () {}, // Callback after click
    }).showToast();
  }

  const { name, location, socials } = cv;
  return (
    <SectionJSX>
      <div className="flex justify-between w-full">
        <div className="w-1/2">
          <h1
            id="name"
            className="text-gray-800 dark:text-gray-200 pb-4 text-wrap text-3xl font-bold"
          >
            {name}
          </h1>
          <p className="text-gray-800 dark:text-gray-200  text-sm font-bold">
            Desarrollador full stack autodidacta
          </p>
          <div className="flex mt-1 dark:text-gray-200">
            <Location />
            <p
              id="locationText"
              className="pl-1 text-gray-800 dark:text-gray-200 text-xs font-mono"
            >
              {location.city}
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <SocialsIcon Icon={Github} link={socials[1].link} />
            <h2 className="print hidden dark:text-gray-200 text-lg text-black">
              {socials[0].link}
            </h2>

            <div className="flex flex-col relative group rounded-lg transition-all ease-in duration-75 align-middle items-center text-center justify-center">
              <a
                id="email"
                className=" flex dark:text-gray-200 border-[2px]  group-hover:bg-gray-100 border-gray-400 p-1 rounded-lg"
                title={socials[0].name}
                href={socials[0].link}
              >
                <Email />

                <div className="hidden print dark:text-gray-200 px-4 text-gray-800">
                  <h2 className="">brianzaragoza25@gmail.com</h2>
                </div>
              </a>

              <div className="invisible dark:bg-black  dark:border-white  absolute top-9 border-[1px] border-gray-500 rounded-lg bg-gray-100 group-hover:visible">
                <button
                  onClick={copyContent}
                  className="p-1 dark:text-white text-gray-700"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="print hidden justify-center  items-center print">
              <Email className="hidden print  text-black" />
              <h2 className="">brianzaragoza25@gmail.com</h2>
            </div>
          </div>
        </div>

        <img
          className="profile w-32 h-32"
          src="https://i.ibb.co/CspqM9vF/Picsart-25-04-08-16-27-25-069"
          alt="pf"
        />
      </div>
    </SectionJSX>
  );
}
