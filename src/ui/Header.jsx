import { NavLink } from "react-router";
import { RiArrowDropDownLine } from "react-icons/ri";

const contestantsDistrict = [
  {
    district: "Okhaldhunga",
    to: "/okhaldhunga",
  },
  {
    district: "Solukhumbu",
    to: "/solukhumbu",
  },
  {
    district: "Kathmandu",
    to: "/kathmandu",
  },
  {
    district: "Pokhara",
    to: "/kathmandu",
  },
  {
    district: "Lalitpur",
    to: "/kathmandu",
  },
];
export default function Header() {
  return (
    <nav className="sticky top-0 z-10 bg-black flex items-center justify-around p-4 text-md font-medium shadow-lg shadow-gray-600/70">
      <div>
        <NavLink to="/home">
          <img src="/logo.jpeg" className="h-20 w-24 cursor-pointer" />
        </NavLink>
      </div>

      <ul className="flex gap-8 text-lg">
        <NavLink
          to="/ourTeam"
          className="cursor-pointer transition-all tracking-wide duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-6"
        >
          Our Team
        </NavLink>

        {/* Contestants with dropdown */}
        <li className="relative group cursor-pointer tracking-wide">
          <div className="flex items-center">
            <span className="transition-all duration-300 group-hover:-translate-y-1 group-hover:underline group-hover:underline-offset-6 inline-block">
              Contestants
            </span>
            <RiArrowDropDownLine className="text-2xl" />
          </div>

          {/* pt-3 creates a transparent bridge — mouse won't "leave" the group */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-50 min-w-45">
            <ul className="bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden flex flex-col">
              {contestantsDistrict.map((district) => (
                <li key={district.district}>
                  <NavLink
                    to={district.to}
                    className="block px-5 py-2.5 text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-150 text-base"
                  >
                    {district.district}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </li>

        <NavLink
          to="/faq"
          className="cursor-pointer transition-all tracking-wide duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-6"
        >
          FAQs
        </NavLink>
        <NavLink
          to="/about"
          className="cursor-pointer transition-all tracking-wide duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-6"
        >
          About Us
        </NavLink>
        <NavLink
          to="/news"
          className="cursor-pointer transition-all tracking-wide duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-6"
        >
          News
        </NavLink>
      </ul>

      <div className="bg-[linear-gradient(267deg,#DA7C25,#B923E1)] text-white px-6 py-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-105">
        <NavLink to="/connect">Connect With Us</NavLink>
      </div>
    </nav>
  );
}
