import { useState } from "react";

export default function LanguageButton() {
  const [lan, setLan] = useState("ES");
  const [visible, setVisible] = useState(false);
  return (
    <div
      id="langButton"
      className="no-print relative flex-col  w-auto  h-16 rounded-lg  justify-center items-center text-center cursor-pointer self-end mx-0 md:mx-20 my-[-40px]"
    >
      <button
        className="bg-gray-300 dark:bg-gray-800  dark:text-gray-300 text-gray-800 px-2 py-1 rounded-lg"
        onClick={() => setVisible(!visible)}
      >
        {lan}
      </button>
      <div
        className={`${
          visible ? "flex flex-col ] " : "hidden"
        } absolute top-9 p-2 left-[-20px] md:left-[-20px] gap-2 border-gray-400 border-[1px] justify-center items-center rounded-lg  w-20 h-auto`}
      >
        <a
          className="w-full h-auto bg-white hover:bg-gray-300  rounded-md text-gray-800 "
          href="/en"
        >
          EN 🇬🇧
        </a>
        <a
          className="w-full h-auto bg-white hover:bg-gray-300  rounded-md text-gray-800 "
          href="/"
        >
          ES 🇪🇸
        </a>
      </div>
    </div>
  );
}
