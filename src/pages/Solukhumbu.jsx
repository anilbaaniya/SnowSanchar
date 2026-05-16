import { images } from "../features/solukhumbu/solukhumbuImage";
import Footer from "../ui/Footer";
import ImageContainer from "../ui/ImageContainer";

export default function Solukhumbu() {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header Section */}
      <section className="text-center pt-12 pb-14 px-4">
        <h1 className="text-3xl md:text-5xl font-bold  tracking-tight">
          Solukhumbu Contestants
        </h1>
        <p className="mt-6 text-sm md:text-base max-w-2xl mx-auto">
          Meet the amazing participants from Solukhumbu district.
        </p>
      </section>

      {/* Gallery Section */}
      <ImageContainer images={images} district="Solukhumbu" />

      <Footer />
    </div>
  );
}
