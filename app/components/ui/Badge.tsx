interface BadgeProps {
    label: string
}

export default function Badge({label}: BadgeProps) {
    return <span className="rounded-sm bg-red-700 font-bold text-sm px-2 py-1">
        {label}
    </span>
}
