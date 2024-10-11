import image_1 from "../../assets/images/image_1.jpeg";
import image_2 from "../../assets/images/image_2.jpeg";
import image_3 from "../../assets/images/image_3.jpeg";
import image_4 from "../../assets/images/image_4.jpeg";

const images = [
    {
        src: image_1,
        alt: "Image 1"
    },
    {
        src: image_2,
        alt: "Image 2"
    },
    {
        src: image_3,
        alt: "Image 3"
    },
    {
        src: image_4,
        alt: "Image 4"
    },
];
const GalleryCarousel = () => {
    return (
        <div className="w-full bg-transparent flex flex-col justify-center relative ">
            <div className="absolute top-0 h-12 w-full bg-customGreen rounded-b-[70%]"></div>
            <div className="flex w-full h-[400px] justify-between items-start gap-3  bg-customGreen overflow-y-auto">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="h-[400px] w-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${image.src})`,
                        }}
                        aria-label={image.alt}
                    ></div>
                ))}
            </div>
            <div className="absolute bottom-0 h-12 w-full bg-customGreen rounded-t-[50%]"></div>
        </div>
    );
}

export default GalleryCarousel