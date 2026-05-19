import { SiGmail } from "react-icons/si";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import Footer from "../ui/Footer";
import SocialMedia from "../ui/SocialMedia";

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col gap-20 justify-center items-center mb-20 mt-10 mx-40"
      >
        <div className="relative">
          <h2 className="text-5xl font-semibold">Get in touch</h2>
          <img
            src="/theme_pattern.svg"
            alt=""
            className="absolute -bottom-2 -right-5 -z-10 w-30 "
          />
        </div>
        <div className=" w-full grid grid-cols-[1fr_1fr] gap-20">
          <div className="flex flex-col gap-6 text-white">
            <h2 className="bg-[linear-gradient(180deg,#DA7C25,#B923E1)] bg-clip-text text-transparent font-semibold text-5xl">
              Contact
            </h2>

            <div className="flex items-center gap-3 ">
              <SiGmail className="text-xl font-bold" />
              <span className="text-sm">snowsancharproduction@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 ">
              <MdOutlinePermPhoneMsg className="text-xl " />
              <span className="text-sm">9842112050</span>
            </div>
            <SocialMedia />
            {/* <div className="flex items-center gap-3 ">
            <FaLocationDot className="text-xl" />
            <span className="text-sm">Kathmandu, Nepal</span>
          </div> */}
          </div>

          <form className="flex flex-col gap-6 text-white">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Your Name </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-stone-700 outline-none px-4 py-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-stone-700 outline-none px-4 py-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Your Phone Number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="bg-stone-700 outline-none px-4 py-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Write your message here</label>
              <textarea
                id="message"
                className="bg-stone-700 outline-none px-4 py-2 rounded-lg h-50"
              />
            </div>
            <button className="w-45 text-xl font-medium mt-6 bg-[linear-gradient(267deg,#DA7C25,#B923E1)] px-6 py-3 text-white rounded-full cursor-pointer transition-all duration-300 hover:scale-105">
              Submit Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
