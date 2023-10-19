import Descripton from "./Description";
import ImageGallery from "./ImageGalary";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen">
      <ImageGallery />
      <Descripton />
    </div>
  );
}
