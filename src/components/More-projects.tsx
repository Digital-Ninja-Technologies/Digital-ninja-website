import { Button } from "./ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface MoreProjectsProps {
  currentProjectId: string;
  allProjects: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
}

const MoreProjects = ({ currentProjectId, allProjects }: MoreProjectsProps) => {
  const projects = allProjects
    .filter((project) => project.id !== currentProjectId)
    .slice(0, 2);
  return (
    <>
      <section className="pt-16 pb-2 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-4xl font-[600] text-[#2E2D2D]">
            More projects
          </h2>
          <Button
            variant="outline"
            className="text-[#FF7E29] py-4 px-12 border-[1.5px] border-[#FFD0B1] rounded-[2rem] hover:text-[#FF7E29] hover:bg-transparent hover:border-[#FF7E29]">
            See all works
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {projects.map((project) => (
            <div key={project.id} className="group  relative">
              {/* Image Container */}
              <div className="h-[487px] w-[520px] border-[2px] border-[#F7F6F6] rounded-[40px] flex items-center justify-center">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} project mockup`}
                  className="w-full h-full object-cover transition-transform duration-300 shadow-md rounded-[40px] ease-in-out hover:scale-110"
                />
              </div>
              <div className="mt-6 flex justify-between">
                <div>
                  <h3 className="md:text-[28px] font-[600] text-[#2E2D2D]">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-[400] text-sm text-[#4D4C4C]">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href={`/works/${project.id}`}>
                  <Button className="text-[#ff7e29] rounded-[2rem] cursor-pointer bg-[#FFF9F5] hover:text-[#ff6602] hover:bg-[#FFF9F5] p-[0.8rem] px-12 h-auto font-medium group overflow-hidden">
                    <ArrowRight className="h-3 w-3 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200" />
                    <span className="flex items-center">
                      <span className="transform transition-transform duration-200 group-hover:-translate-x-1">
                        See more
                      </span>
                    </span>
                  </Button>
                </Link>

                <Button
                  variant="ghost"
                  className="text-[#ff7e29] hover:text-[#ff7e29] p-4 h-auto font-medium hover:bg-transparent hover:rounded-[2rem] cursor-pointer hover:border hover:border-[#FFF9F5] hover:px-4 hover:py-1  transition-all duration-200">
                  View live
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MoreProjects;
