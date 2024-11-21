interface TechBadgeProps {
    name: string;
    color: string;
}

// Color classes as strings
const colorClasses: Record<string, string> = {
    gray: "bg-gray-50 text-gray-600 dark:bg-gray-700 dark:text-gray-100 ring-gray-500/10",
    red: "bg-red-50 text-red-600 dark:bg-red-700 dark:text-red-100 ring-red-500/10",
    yellow: "bg-yellow-50 text-yellow-600 dark:bg-yellow-700 dark:text-yellow-100 ring-yellow-500/10",
    green: "bg-green-50 text-green-600 dark:bg-green-700 dark:text-green-100 ring-green-500/10",
    blue: "bg-blue-50 text-blue-600 dark:bg-blue-700 dark:text-blue-100 ring-blue-500/10",
    indigo: "bg-indigo-50 text-indigo-600 dark:bg-indigo-700 dark:text-indigo-100 ring-indigo-500/10",
    purple: "bg-purple-50 text-purple-600 dark:bg-purple-700 dark:text-purple-100 ring-purple-500/10",
    pink: "bg-pink-50 text-pink-600 dark:bg-pink-700 dark:text-pink-100 ring-pink-500/10",
};

export default function TechBadge({ name, color }: TechBadgeProps) {
    const classes = colorClasses[color] || colorClasses.gray; // Fallback to 'gray' if color is undefined

    return (
        <span
            className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${classes}`}
        >
            {name}
        </span>
    );
}
