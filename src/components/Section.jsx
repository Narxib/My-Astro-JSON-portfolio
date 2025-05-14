export default function SectionJSX({ children, title }) {
    return (
        <div className="w-11/12 max-w-[800px] h-auto mt-8 p-5">
            {title && <h2 class="text-2xl text-gray-800 font-bold">{title}</h2>}
            <h2 className="text-2xl text-gray-800 font-bold">{title}</h2>
            {children}
        </div>

    )
}