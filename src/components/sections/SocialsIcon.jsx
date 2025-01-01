
export default function SocialsIocon({ Icon, name, link }) {
    return (
        <button className="flex group rounded-lg transition-all ease-in duration-75 items-center text-center justify-center">
            <a
                className="border-[2px] group-hover:bg-gray-100 border-gray-400 p-1 rounded-lg"
                title={name}
                href={link}
            >
                <Icon />
            </a>

        </button>
    )
}

