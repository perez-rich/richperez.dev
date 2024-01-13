interface PageHeadingProps {
    label: string
}

export default function PageHeading({ label }: PageHeadingProps) {
    return <h1 className="text-3xl font-bold font-mono text-center pb-4">
        {label}
    </h1>
};
