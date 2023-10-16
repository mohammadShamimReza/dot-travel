import { Image } from "antd";
import image1 from "../../../assets/companyLogo1.jpeg";
import image2 from "../../../assets/companyLogo2.png";
import image3 from "../../../assets/companyLogo3.png";
import image4 from "../../../assets/companyLogo4.jpeg";

const ImageGallery = () => {
  const images = [
    image1.src, // Convert StaticImageData to string
    image2.src,
    image3.src,
    image4.src,
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            className="rounded-lg"
            preview={true} // Prevent the image from being opened in a modal
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
