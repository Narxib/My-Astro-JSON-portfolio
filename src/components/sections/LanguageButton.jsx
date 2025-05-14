import { useState } from "react";

export default function LanguageButton() {
  const [lan, setLan] = useState("ES");
  const [visible, setVisible] = useState(false);
  return (
    <div id="langButton" className="no-print flex-col w-auto relative h-16 rounded-lg  justify-center items-center text-center cursor-pointer self-end mx-20 my-[-40px]">
      <button
        className="bg-gray-300 text-gray-800 px-2 py-1 rounded-lg"
        onClick={() => setVisible(!visible)}
      >
        {lan}
      </button>
      <div
        className={`${
          visible ? "flex flex-col " : "hidden"
        } absolute top-9 p-2 left-[-9px] gap-2 border-dotted border-gray-400 border-[1px] justify-center items-center rounded-lg  w-14 h-auto`}
      >
        <a className="w-full h-auto bg-white hover:bg-gray-300  rounded-md text-gray-800 " href="/en">
          EN
        </a>
        <a className="w-full h-auto rounded-md bg-white hover:bg-gray-300" href="/es">
          ES
        </a>
      </div>
    </div>
  );
}
