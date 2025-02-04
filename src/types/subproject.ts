interface SubProject {
  id: number;
  name: string;
  description: string;
  type: string;
  createdAt: string;
  deploymentUrl: string;
  generation: number;
  photos: { id: number; photoUrl: string }[];
  projectMembers: { name: string; role: string }[];
}

interface ArchivingModalProps {
  sub: number;
  onClose: () => void;
}

export type { SubProject, ArchivingModalProps };
