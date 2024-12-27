
export default function SocialsIocon({ Icon, name, link }) {
    return (
        <button className="flex flex-col group rounded-lg transition-all ease-in duration-75 align-middle items-center text-center justify-center">
            <a
                className="border-[2px] group-hover:bg-gray-100 border-gray-400 p-1 rounded-lg"
                title={name}
                href={link}
            >
                <Icon />
            </a>
            <div className="invisible mt-2 text-gray-700 border-[1px] border-gray-500 rounded-lg bg-gray-100 group-hover:visible">
                <a className="p-1" href="/" >Copy</a>
            </div>
        </button>
    )
}

