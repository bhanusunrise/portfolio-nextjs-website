interface AchievementSectionProps {
  title: string;
  text: string;
  image_link: string;
}

export default function AchievementSection({ title, text, image_link }: AchievementSectionProps) {
  console.log(image_link);
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        src={image_link}
        alt={title}
        className="w-full h-96 md:w-48 md:h-auto md:rounded-none md:rounded-s-lg object-cover"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{text}</p>
      </div>
    </a>
  );
}