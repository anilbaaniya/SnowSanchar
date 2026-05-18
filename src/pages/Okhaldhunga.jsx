import Footer from "../ui/Footer";

export default function Okhaldhunga() {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header Section */}
      <section className="text-center pt-12 pb-4 px-4">
        <h1 className="text-3xl md:text-5xl font-bold  tracking-tight">
          Okhaldhunga Contestants
        </h1>
        <p className="mt-3 text-sm md:text-base max-w-2xl mx-auto">
          Meet the amazing participants from Okhaldhunga district.
        </p>
      </section>

      {/* Gallery Section */}

      <Footer />
    </div>
  );
}
