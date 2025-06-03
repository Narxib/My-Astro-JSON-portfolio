import { useEffect, useState } from "react";
import { navigate } from "astro/virtual-modules/transitions-router.js";

export default function LanguageButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const pathLang = window.location.pathname.replace("/", "/");
    const selector = document.getElementById("languageMenu");
    if (pathLang === "" || pathLang === "en") {
      selector.value = "ES";
    } else {
      selector.value = pathLang;
    }
  }, []);

  return (
    <div className="no-print relative  flex-col  w-auto rounded-lg  justify-center items-center text-center cursor-pointer">
      <select
        onChange={(e) => navigate(`${e.target.value}`)}
        className="dark:bg-black dark:hover:bg-white  hover:bg-black hover:text-white dark:text-white cursor-pointer dark:border-white dark:border-[1px] dark:hover:text-black rounded-lg p-2"
        name="language"
        id="languageMenu"
      >
        <option className="text-red-400" value="/">
          ES
        </option>
        <option
          className="dark:select:bg-black decoration-red-400 hover:bg-red-500 dark:hover:text-white"
          value="/en"
        >
          EN
        </option>
      </select>
    </div>
  );
}
