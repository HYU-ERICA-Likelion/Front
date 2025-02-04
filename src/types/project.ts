interface Project {
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

export type { Project };
