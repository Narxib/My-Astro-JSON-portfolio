export default function SectionJSX({ children, title }) {
    return (
        <div className="w-1/2 h-auto mt-8">
            {title && <h2>{title}</h2>}
            {children}
        </div>

    )
}