import Image from "next/image";

const teamMembers = [
  {
    name: "Ifeoluwa Onifade",
    role: "Team Lead",
    image: "/team.svg",
  },
  {
    name: "Xeus Adebanjo",
    role: "Team Lead",
    image: "/team.svg",
  },
  {
    name: "Philip Charles",
    role: "Team Lead",
    image: "/team.svg",
  },
  {
    name: "Ifeoluwa Onifade",
    role: "Team Lead",
    image: "/team.svg",
  },
];

export default function Team() {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-20 px-4 md:px-0 flex flex-col md:flex-row justify-between">
          <span className="text-[#FF7E29] font-[500] text-lg uppercase tracking-wider mb-4 block">
            MEET THE TEAM
          </span>
          <h2 className="text-2xl lg:text-[42px] font-[600] text-gray-900 leading-tight max-w-4xl">
            Talent, curiosity and passion, qualities our team members embody.
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              {/* Profile Image */}
              <div className="mb-6 relative">
                <div className="w-64 h-64 mx-auto rounded-3xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <div className="w-full h-full bg-[#F2F2F2] rounded-2xl overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.role}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-500 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
