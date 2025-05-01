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
      className="no-print w-12 h-12  cursor-pointer self-end mx-[-20px] "
    >
      <svg
        id="sunsvg"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="icon icon-tabler icons-tabler-outline icon-tabler-sun"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7" />
      </svg>
    </button>
  );
}
