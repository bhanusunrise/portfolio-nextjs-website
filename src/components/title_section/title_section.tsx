interface TitleSectionProps {
  title: string;
}

export default function TitleSection({ title }: TitleSectionProps) {
  return (
    <>
      <h1 className="text-7xl text-gray-50">{title}</h1>
    </>
  );
}
