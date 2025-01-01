interface ImageSectionProps {
    image_path: string;
}

export default function ImageSection({ image_path }: ImageSectionProps) {
    return (
        <>
            <div
                className="w-full h-full bg-no-repeat bg-center bg-contain"
                style={{
                    backgroundImage: `url(${image_path})`,
                }}
            ></div>
        </>
    );
}
