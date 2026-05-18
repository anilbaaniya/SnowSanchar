import Footer from "../ui/Footer";

export default function About() {
  return (
    <>
      <div className="bg-white text-gray-800">
        {/* Hero Image */}
        <div className="w-full h-[420px] overflow-hidden">
          <img
            src="/about.JPEG"
            alt="About Snow Sanchar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
          <p className="text-lg leading-8 text-gray-600 text-justify">
            Snow Sanchar is a creative event management organization built on a
            simple belief: everyone has talent, they just need the right stage
            to express it. We organize talent shows and beauty pageants that
            help individuals gain confidence and showcase who they truly are.
            Our programs go beyond modeling and include dancing, singing,
            acting, poetry, public speaking, arts, and more.
          </p>

          <p className="text-lg leading-8 text-gray-600 text-justify">
            As we continue to grow, we are expanding across different districts
            of Nepal with the aim of discovering hidden talents and providing
            opportunities. At Snow Sanchar, we don’t just organize events—we
            create meaningful experiences that build confidence, inspire dreams,
            and encourage people to believe in themselves.
          </p>
        </div>

        {/* CEO Section */}
        <div className="bg-[rgb(209,209,214)] py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 gap-20 items-center">
            {/* Text */}
            <div className="space-y-4 text-white bg-black px-10 py-6 rounded-2xl">
              <h2 className="text-3xl font-bold  border-l-4 border-blue-500 pl-4">
                CEO's Message
              </h2>

              <p className=" leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                dolores architecto, tempore tenetur dolorem esse hic, earum
                aspernatur optio voluptatibus. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quia consectetur perspiciatis
                exercitationem! Deleniti ea inventore hic tempora iure in,
                dolore voluptas neque nulla obcaecati consequuntur excepturi
                accusantium totam. Velit, dolore!
              </p>

              <p className="leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                sequi ratione impedit, ullam sequi dolorem esse hic. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Vero corrupti hic
                deserunt delectus illum dolorem animi reiciendis maiores
                quisquam, facilis iusto, eaque ad commodi a error quos sint
                architecto atque!
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center  border-6 border-white rounded-2xl">
              <div className="relative">
                <img
                  src="ceo1.png"
                  alt="CEO"
                  className="w-110 h-120  object-cover rounded-2xl "
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-xl shadow-md text-sm">
                  Co-Founder & CEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
