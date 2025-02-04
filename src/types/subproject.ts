interface SubProject {
  id: number;
  team: string;
  name: string;
  description: string;
  type: string;
  startDate: string;
  endDate: string;
  deploymentUrl: string;
  thumbnailUrl: string;
  generation: number;
  photos: { id: number; photoUrl: string }[];
  projectMembers: { name: string; role: string }[];
}

interface ArchivingModalProps {
  selectedProject: SubProject;
  onClose: () => void;
}

export type { SubProject, ArchivingModalProps };
