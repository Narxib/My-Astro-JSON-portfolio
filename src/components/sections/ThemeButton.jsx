export default function ThemeButton() {
  function changeTheme() {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "light") {
      localStorage.setItem("theme", "dark");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }

  return (
    <button
      onClick={() => changeTheme()}
      className="no-print flex w-9 h-9 rounded-lg justify-center items-center bg-black-800 group dark:border-white border-[1px] hover:bg-black dark:hover:bg-white dark:hover:stroke-black cursor-pointer "
    >
      <svg
        id="sunsvg"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        class=" stroke-black w-6 h-auto flex  items-center justify-center group-hover:stroke-white dark:group-hover:stroke-black hover:stroke-white dark:stroke-white"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7" />
      </svg>
    </button>
  );
}
