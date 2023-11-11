const ImageGallery = () => {
  const images = [1, 2, 3, 4];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* {images.map((image, index) => (
        <div key={index}>
          <SiYourtraveldottv className="w-60 h-48 pt-3 pb-7" />
        </div>
      ))} */}
    </div>
  );
};

export default ImageGallery;
