interface Project {
  image: string;
  title: string;
  description: string;
  type: string;
  gen: number;
 }

import Image from "next/image";

export default function ProjectCards({ projectData }: { projectData: Project[] }) 
{
  return(
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        {projectData.map((project, index) => (
          <div key={index}>
            <div className="flex flex-col p-[15px_16.589px] w-[322px] h-[258px] rounded-[14px] bg-gray4">
              <Image 
                width={288}
                height={144}
                className="rounded-lg bg-[#848383] object-cover" 
                src={project.image} 
                alt={project.image} 
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
    </div>   
  );
}