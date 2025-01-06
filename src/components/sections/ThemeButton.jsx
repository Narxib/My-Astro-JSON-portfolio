import sun from "@/icons/sun.svg";
import moon from "@/icons/moon.svg";


export default function ThemeButton() {
    const theme = localStorage.getItem("theme")

    function changeTheme() {
        if (theme === "light") {
            localStorage.setItem("theme", "dark")
        } else {
            localStorage.setItem("theme", "light")
        }

    }

    return (
        <button onClick={changeTheme}>
            {theme === "light" ? <sun /> : <moon />}
        </button>
    )
}
