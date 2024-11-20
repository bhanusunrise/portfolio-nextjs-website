interface ImageSectionProps {
    image_path: string;
}

export default function ImageSection({ image_path }: ImageSectionProps) {
    return (
        <>
            <div
                className="w-full h-full bg-no-repeat bg-center bg-contain"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(17, 24, 39, 1) 90%, rgba(17, 24, 39, 1) 100%), url(${image_path})`,
                }}
            ></div>
        </>
    );
}
