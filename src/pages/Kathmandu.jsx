import { useState, useMemo } from "react";
import Footer from "../ui/Footer";
import ImageContainer from "../ui/ImageContainer";
import { teejImages } from "../features/kathmandu/teej";
import { littleSnowImages } from "../features/kathmandu/little-snow";

function Spinner() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );
}

export default function Kathmandu() {
  const [program, setProgram] = useState("little-snow");
  const [loading, setLoading] = useState(false);

  // memoized images
  const currentImages = useMemo(() => {
    return program === "little-snow" ? littleSnowImages : teejImages;
  }, [program]);

  const handleChange = (value) => {
    setLoading(true);

    // small delay so UI feels smooth instead of freezing
    setTimeout(() => {
      setProgram(value);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <section className="text-center pt-12 pb-4 px-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight ">
          Kathmandu Contestants
        </h1>
        <p className="mt-3 text-sm md:text-base max-w-2xl mx-auto ">
          Meet the amazing participants from Kathmandu district.
        </p>
      </section>

      {/* Buttons */}
      <div className="flex justify-center gap-4 my-8 px-4">
        <button
          onClick={() => handleChange("little-snow")}
          className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 shadow-md cursor-pointer
            ${
              program === "little-snow"
                ? "bg-yellow-600 text-white  scale-105"
                : "bg-white text-gray-700  "
            }`}
        >
          Little Snow
        </button>

        <button
          onClick={() => handleChange("teej")}
          className={`px-6 py-3 rounded-full w-30 font-semibold text-sm md:text-base transition-all duration-300 shadow-md cursor-pointer
            ${
              program === "teej"
                ? "bg-yellow-600 text-white  "
                : "bg-white text-gray-700 "
            }`}
        >
          Teej
        </button>
      </div>

      {/* Loader only when switching */}
      {loading ? (
        <Spinner />
      ) : (
        <ImageContainer images={currentImages} district="Kathmandu" />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
