import Link from "next/link";

interface SeeMoreBtnProps {
    text: string;
    link: string;
}

export default function SeeMoreBtnSmall({ text, link }: SeeMoreBtnProps) {
    return (
        <>
            <Link href={link} target="_blank">
                <button type="button" className="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {text}
                </button>
            </Link>
        </>
    );
}