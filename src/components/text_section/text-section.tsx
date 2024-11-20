interface TextSectionProps {
  title: string;
  subtitle: string;
}

export default function TextSection({ title, subtitle }: TextSectionProps) {
  return (
    <>
      <h1 className="text-4xl text-gray-50">{title}</h1>
      <br />
      <p className="text-2xl text-gray-400 text-justify">{subtitle}</p>
    </>
  );
}
