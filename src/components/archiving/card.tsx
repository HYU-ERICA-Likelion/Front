"use client";

interface ProjectCardsProps {
  projectData: SubProject[];
  selectedGen: string;
}

import Image from "next/image";
import ArchivingModal from "./modal";
import { useEffect, useState } from "react";
import { SubProject } from "@/types/subproject";

export default function ProjectCards({
  projectData,
  selectedGen,
}: ProjectCardsProps) {
  const filteredProjects = projectData.filter((project) =>
    selectedGen === "전체"
      ? true
      : project.generation === Number(selectedGen.slice(0, -1))
  );
  const [selectedProject, setSelectedProject] = useState<SubProject | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: SubProject) => {
    setSelectedProject(project);
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-[30px] pb-[309px]">
        {filteredProjects.map((project) => (
          <div key={project.id} onClick={() => handleProjectClick(project)}>
            <div className="cursor-pointer hover:bg-gray4/80 flex flex-col p-[15px_16.589px] w-[322px] h-[258px] rounded-[14px] bg-gray4">
              <Image
                width={288}
                height={144}
                className="rounded-lg bg-[#848383] object-cover h-[144px]"
                src={project?.thumbnailUrl}
                alt={project?.name}
              />
              <div>
                <div className="flex flex-row items-center h-[24px] mt-[15px] gap-[12px]">
                  <div className="text-[18px] font-bold line-clamp-1 ">
                    {project?.name}
                  </div>
                  <span className="text-[12px] text-white/40">
                    {project?.type}
                  </span>
                </div>
                <div className="break-words text-white/75 line-clamp-2 mt-[7px] text-[14px] font-medium">
                  {project?.description
                    ?.replace(/\\n/g, "\n")
                    .split("\n")
                    .map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 ">
          <ArchivingModal
            selectedProject={selectedProject}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
