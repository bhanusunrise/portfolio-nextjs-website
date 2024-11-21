import SeeMoreBtnSmall from "../see_more_button/see_more_btn_small";
import TechBadge from "../tech_badge/tech_badge";

interface ProjectSectionProps {
    title: string;
    description: string;
    image_link: string;
    image_alt: string;
    badge_names: string[];
    badge_colors: string[];
    link: string;
}

export default function columnProjectSection({ title, description, image_link, image_alt, badge_names, badge_colors, link }: ProjectSectionProps) { 
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={image_link} alt={image_alt} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">{description}</p>
                    <div className="flex justify-center flex-wrap gap-2">
                        {badge_names.map((name, index) => (
                            <TechBadge key={index} name={name} color={badge_colors[index]} />
                        ))}
                        
                        
                    </div>
                    <div className="flex justify-center flex-wrap gap-2 pt-5">
                        <SeeMoreBtnSmall text="View Project" link={link} />
                    </div>
                   
                </div>
            </div>
        </>
    );
}
