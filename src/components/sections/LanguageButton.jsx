import { useState } from "react";

export default function LanguageButton() {
  const [lan, setLan] = useState("ES");
  const [visible, setVisible] = useState(true);
  return (
    <div className="no-print flex-col w-auto relative h-16 rounded-lg  justify-center items-center text-center  cursor-pointer self-end mx-12 my-[-30px]">
      <button
        className="bg-slate-800 px-2 py-1 rounded-lg"
        onClick={() => setVisible(!visible)}
      >
        {lan}
      </button>
      <div
        className={`${
          visible ? "flex-col" : "hidden"
        } absolute top-9 left-[-9px] rounded-lg bg-red-400 w-12 h-16`}
      >
        <a className="w-12 h-12 px-2 rounded-md text-white" href="/en">
          EN
        </a>
      </div>
    </div>
  );
}
