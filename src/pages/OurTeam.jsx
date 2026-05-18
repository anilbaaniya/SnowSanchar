import Footer from "../ui/Footer";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Santosh Kumar Raut",
      role: "Founder",
      image: "/teamMember/santosh.jpeg",
    },
    {
      name: "Sambav Raut",
      role: "Co-Founder & CEO",
      image: "/teamMember/sambav.jpeg",
    },
    {
      name: "Anmol Rauniyar",
      role: "Production Director",
      image: "/teamMember/anmol.jpeg",
    },
    {
      name: "Janak Oli",
      role: "Vision Architect",
      image: "/teamMember/janak.jpeg",
    },
    {
      name: "Bishal Baniya",
      role: "Assistant Manager",
      image: "/teamMember/bishal.jpeg",
    },
    {
      name: "Simrika Khatri",
      role: "Coordinator & Choreographer",
      image: "/teamMember/simrika.jpeg",
    },
    {
      name: "Puja Ghimire",
      role: "District Manager",
      image: "/teamMember/puja.jpeg",
    },
    {
      name: "Pratik Mishra",
      role: "District Manager",
      image: "/teamMember/pratik.jpeg",
    },
    {
      name: "Sandhya Shrestha",
      role: "District Manager",
      image: "/teamMember/sandhya.jpeg",
    },
    {
      name: "Bikash Khadka",
      role: "Head Mentor",
      image: "/teamMember/bikash.jpeg",
    },
    {
      name: "Rikal Karki",
      role: "Mentor",
      image: "/teamMember/rikal.jpeg",
    },
    {
      name: "Ditya Adhikari",
      role: "Mentor",
      image: "/teamMember/ditya.jpeg",
    },
    {
      name: "Shital Balami",
      role: "Mentor",
      image: "/teamMember/sital.jpeg",
    },
    {
      name: "Jonish Shrestha",
      role: "Mentor",
      image: "/teamMember/jonish.jpeg",
    },
    {
      name: "Pratha Tandukar",
      role: "Graphic Designer",
      image: "/teamMember/pratha.jpeg",
    },
  ];

  const firstRow = teamMembers.slice(0, 2);
  const remainingMembers = teamMembers.slice(2);

  return (
    <>
      <section className=" py-16 px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ffbf00] mb-4">
            Meet Our Team
          </h2>

          <div className="w-88 h-1 bg-[#ffbf00] mx-auto rounded-full"></div>

          <p className="text-gray-300 mt-8  max-w-3xl mx-auto text-xl font-semibold leading-relaxed">
            Meet the passionate professionals who bring creativity, leadership,
            and dedication to every step of our journey.
          </p>
        </div>
        {/* First Row - 2 Members Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto mb-12">
          {firstRow.map((member, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] rounded-3xl p-6 text-center shadow-xl border border-[#ffbf00]/20 hover:border-[#ffbf00] hover:shadow-[0_0_30px_rgba(255,191,0,0.25)] transform hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-[#ffbf00] shadow-lg"
              />

              <h3 className="mt-5 text-2xl font-bold text-[#ffbf00]">
                {member.name}
              </h3>

              <p className="mt-2 text-gray-300 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
        {/* Remaining Members - 4 Per Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {remainingMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] rounded-3xl p-6 text-center shadow-lg border border-[#ffbf00]/20 hover:border-[#ffbf00] hover:shadow-[0_0_25px_rgba(255,191,0,0.2)] transform hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-[#ffbf00] shadow-md"
              />

              <h3 className="mt-4 text-lg font-bold text-[#ffbf00] leading-tight">
                {member.name}
              </h3>

              <p className="mt-2 text-sm text-gray-300 font-medium leading-snug">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
