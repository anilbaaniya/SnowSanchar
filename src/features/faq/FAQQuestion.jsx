export default function FAQQuestion({ faqs }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10">
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300"
          >
            {/* Question */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 bold  bg-gray-200 px-4 py-3 rounded-xl">
              {index + 1}
              {". "}
              {faq.question}
            </h2>

            {/* Answer */}
            <p className="mt-3  px-4 text-justify text-gray-600 leading-8 text-base ">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
