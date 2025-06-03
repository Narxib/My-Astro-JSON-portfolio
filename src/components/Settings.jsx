import ThemeButton from "./sections/ThemeButton";
import LanguageButton from "./sections/LanguageButton";

export default function Settings() {
  return (
    <div className="flex w-full h-16 items-center justify-end px-12 ml-32 mt-2 md:ml-0   gap-2">
      <LanguageButton />
      <ThemeButton />
    </div>
  );
}
