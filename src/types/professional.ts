import type { ServiceAreaId } from "./service";

export type ProfessionalImage = {
  src: string;
  alt: string;
};

export type Professional = {
  id: string;
  slug: string;
  name: string;
  role: string;
  secondaryRoles: string[];
  professionalRegistration: string;
  shortBio: string;
  bio: string;
  workingApproach: string;
  education: string[];
  specializations: string[];
  workAreas: string[];
  experienceAreas: string[];
  areas: ServiceAreaId[];
  image: ProfessionalImage | null;
  enabled: boolean;
  order: number;
};
