interface TechBadgeProps {
    name: string;
    color: string;
}

const colorClasses = {
    gray: {
        bgLight: "bg-gray-50",
        textLight: "text-gray-600",
        bgDark: "dark:bg-gray-700",
        textDark: "dark:text-gray-100",
        ring: "ring-gray-500/10"
    },
    red: {
        bgLight: "bg-red-50",
        textLight: "text-red-600",
        bgDark: "dark:bg-red-700",
        textDark: "dark:text-red-100",
        ring: "ring-red-500/10"
    },
    yellow: {
        bgLight: "bg-yellow-50",
        textLight: "text-yellow-600",
        bgDark: "dark:bg-yellow-700",
        textDark: "dark:text-yellow-100",
        ring: "ring-yellow-500/10"
    }, green: {
        bgLight: "bg-green-50",
        textLight: "text-green-600",
        bgDark: "dark:bg-green-700",
        textDark: "dark:text-green-100",
        ring: "ring-green-500/10"
    }, blue: {
        bgLight: "bg-blue-50",
        textLight: "text-blue-600",
        bgDark: "dark:bg-blue-700",
        textDark: "dark:text-blue-100",
        ring: "ring-blue-500/10"
    }, indigo: {
        bgLight: "bg-indigo-50",
        textLight: "text-indigo-600",
        bgDark: "dark:bg-indigo-700",
        textDark: "dark:text-indigo-100",
        ring: "ring-indigo-500/10"
    }, purple:{
        bgLight: "bg-purple-50",
        textLight: "text-purple-600",
        bgDark: "dark:bg-purple-700",
        textDark: "dark:text-purple-100",
        ring: "ring-purple-500/10"
    }, pink: {
        bgLight: "bg-pink-50",
        textLight: "text-pink-600",
        bgDark: "dark:bg-pink-700",
        textDark: "dark:text-pink-100",
        ring: "ring-pink-500/10"
    },
};

export default function TechBadge({ name, color }: TechBadgeProps) {
    const colorClass = colorClasses[color] || colorClasses.gray; // Fallback to 'gray' if color is undefined

    return (
        <span
            className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${colorClass.bgLight} ${colorClass.textLight} ${colorClass.ring} ${colorClass.bgDark} ${colorClass.textDark}`}
        >
            {name}
        </span>
    );
}
