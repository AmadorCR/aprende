export type ServiceAreaId =
  | "aprendizaje-educacion"
  | "comunicacion-lenguaje"
  | "terapia-psicologica"
  | "neuropsicologia"
  | "evaluacion-orientacion";

export type Service = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  detail: {
    introduction: string;
    focus: string[];
    audience: string;
  };
  enabled: boolean;
  featured: boolean;
  order: number;
  hasDetailPage: boolean;
};

export type ServiceArea = {
  id: ServiceAreaId;
  slug: ServiceAreaId;
  name: string;
  shortDescription: string;
  services: Service[];
  enabled: boolean;
  order: number;
};
