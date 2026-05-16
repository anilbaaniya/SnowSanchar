import ImageCard from "./ImageCard";

export default function ImageContainer({ images, district }) {
  return (
    <main className="flex-1 px-4 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <ImageCard
              key={image}
              image={image}
              index={index}
              district={district}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
