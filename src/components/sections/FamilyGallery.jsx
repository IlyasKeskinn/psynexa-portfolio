import GalleryCarousel from "../Gallery/GalleryCarousel";

const FamilyGallery = () => {
  return (
    <section id="about-section" className="bg-customGreen py-12 z-50">
      <div className="max-w-screen-md mx-auto pt-2">
        <div className="text-center">
          <h6 className="font-semibold text-5.5xl text-black mb-5">
            Family Background
          </h6>
          <p className="font-medium text-lg text-black mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type!
          </p>
        </div>
      </div>
      <GalleryCarousel />
    </section>
  )
}

export default FamilyGallery