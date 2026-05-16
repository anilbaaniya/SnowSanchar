import { useState } from "react";

export default function ImageCard({ image, index, district }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-200 shadow-md">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-300" />
      )}

      <img
        src={image}
        alt={`${district} Contestant ${index + 1}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-64 object-cover object-top transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
