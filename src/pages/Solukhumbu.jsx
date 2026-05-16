import { images } from "../features/solukhumbu/solukhumbuImage";
import Footer from "../ui/Footer";

export default function Solukhumbu() {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header Section */}
      <section className="text-center pt-12 pb-4 px-4">
        <h1 className="text-3xl md:text-5xl font-bold  tracking-tight">
          Solukhumbu Contestants
        </h1>
        <p className="mt-3 text-sm md:text-base max-w-2xl mx-auto">
          Meet the amazing participants from Solukhumbu district.
        </p>
      </section>

      {/* Gallery Section */}
      <main className="flex-1 px-4 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1"
              >
                {/* Image */}
                <img
                  src={image}
                  alt={`Solukhumbu Contestant ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 object-cover object-top"
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

                {/* Bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">
                    Contestant {index + 1}
                  </p>
                </div>

                {/* Optional gradient overlay for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
