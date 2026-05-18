import { faqs } from "../features/faq/faq";
import FAQQuestion from "../features/faq/FAQQuestion";
import Footer from "../ui/Footer";

export default function FAQ() {
  return (
    <>
      <section className="min-h-screen bg-[#333] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font- text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
              Find answers to the most common questions about Snow Sanchar
              Production.
            </p>
          </div>

          {/* FAQ Container */}
          <FAQQuestion faqs={faqs} />
        </div>
      </section>
      <Footer />
    </>
  );
}
