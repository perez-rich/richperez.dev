
interface HeadingProps {
    label: string
}

export function Heading({ label }: HeadingProps) {
    return <h3 className="text-2xl font-bold py-2">{label}</h3>;
}