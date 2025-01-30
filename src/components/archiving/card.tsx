interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  type: string;
  gen: number;
 }

 interface ProjectCardsProps {
  projectData: Project[];
  selectedGen: string;
}

import Image from "next/image";
import ArchivingModal from "./modal";

export default function ProjectCards({ projectData, selectedGen }: ProjectCardsProps) 
{
  const filteredProjects = projectData.filter((project) => 
    selectedGen === "전체" ? true : project.gen === Number(selectedGen.slice(0,-1))
  );

  return(
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-[30px]">
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <div className="flex flex-col p-[15px_16.589px] w-[322px] h-[258px] rounded-[14px] bg-gray4">
              <Image 
                width={288}
                height={144}
                className="rounded-lg bg-[#848383] object-cover" 
                src={project.image} 
                alt={project.title} 
              />
              <div>
                <div className="flex flex-row items-center h-[24px] mt-[15px] gap-[12px]">
                  <div className="text-[20px] font-bold">{project.title}</div>
                  <span className="text-white/40">{project.type}</span>
                </div>
                <div className="break-words text-white/75 line-clamp-2 mt-[7px] text-[14px] font-medium">
                  {project.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ArchivingModal/> 
    </div>   
  );
}