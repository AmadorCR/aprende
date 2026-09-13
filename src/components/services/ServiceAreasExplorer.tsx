"use client";

import { useState } from "react";

import type { Service, ServiceArea, ServiceAreaId } from "@/types/service";

const areaAccentClassNames: Record<ServiceAreaId, string> = {
  "aprendizaje-educacion": "border-[color:var(--color-brand-purple)]",
  "comunicacion-lenguaje": "border-[color:var(--color-brand-cyan)]",
  "terapia-psicologica": "border-[color:var(--color-brand-pink)]",
  neuropsicologia: "border-[#7D75E3]",
  "evaluacion-orientacion": "border-[#69A1F0]",
};

type ServiceAreasExplorerProps = {
  areas: ServiceArea[];
};

type SelectedService = {
  areaId: ServiceAreaId;
  serviceId: string;
};

export function ServiceAreasExplorer({ areas }: ServiceAreasExplorerProps) {
  const [selectedService, setSelectedService] = useState<SelectedService | null>(null);

  function handleServiceSelect(areaId: ServiceAreaId, serviceId: string) {
    setSelectedService((currentService) => {
      if (currentService?.areaId === areaId && currentService.serviceId === serviceId) {
        return null;
      }

      return { areaId, serviceId };
    });
  }

  return (
    <>
      {areas.map((area, index) => {
        const selectedAreaService =
          selectedService?.areaId === area.id
            ? area.services.find((service) => service.id === selectedService.serviceId)
            : undefined;

        return (
          <ServiceAreaSection
            key={area.id}
            area={area}
            number={index + 1}
            accentClassName={areaAccentClassNames[area.id]}
            selectedServiceId={selectedService?.serviceId ?? null}
            selectedAreaService={selectedAreaService}
            onServiceSelect={handleServiceSelect}
          />
        );
      })}
    </>
  );
}

type ServiceAreaSectionProps = {
  area: ServiceArea;
  number: number;
  accentClassName: string;
  selectedServiceId: string | null;
  selectedAreaService?: Service;
  onServiceSelect: (areaId: ServiceAreaId, serviceId: string) => void;
};

function ServiceAreaSection({
  accentClassName,
  area,
  number,
  onServiceSelect,
  selectedAreaService,
  selectedServiceId,
}: ServiceAreaSectionProps) {
  return (
    <section className={accentClassName} aria-labelledby={`${area.id}-title`}>
      <div className="grid gap-7 border-l-4 border-inherit px-5 py-9 sm:px-7 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-10">
        <div>
          <p
            className="text-sm font-semibold text-[color:var(--color-brand-purple-strong)]"
            aria-hidden="true"
          >
            {number.toString().padStart(2, "0")}
          </p>
          <h3
            id={`${area.id}-title`}
            className="mt-3 text-2xl font-semibold leading-tight text-[color:var(--color-ink)]"
          >
            {area.name}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-8 text-[color:var(--color-muted)]">
            {area.shortDescription}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--color-muted)]">
            Servicios
          </h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-x-4">
            {area.services.map((service) => {
              const isSelected = selectedServiceId === service.id;

              return (
                <li key={service.id}>
                  <button
                    type="button"
                    className={`group flex min-h-11 w-full items-start gap-3 rounded-lg border px-3 py-2.5 text-left text-base leading-7 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none ${
                      isSelected
                        ? "border-[color:var(--color-brand-purple)] bg-[color:var(--color-surface)] text-[color:var(--color-brand-purple-strong)]"
                        : "border-transparent text-[color:var(--color-ink)] hover:border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-surface)]"
                    }`}
                    aria-expanded={isSelected}
                    aria-controls={isSelected ? `${service.id}-detail` : undefined}
                    onClick={() => onServiceSelect(area.id, service.id)}
                  >
                    <span
                      className={`mt-3 h-1.5 w-1.5 shrink-0 rounded-full ${
                        isSelected
                          ? "bg-[color:var(--color-brand-pink)]"
                          : "bg-[color:var(--color-brand-purple)]"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="font-medium">{service.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {selectedAreaService ? (
        <ServiceDetail service={selectedAreaService} />
      ) : null}
    </section>
  );
}

type ServiceDetailProps = {
  service: Service;
};

function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div
      id={`${service.id}-detail`}
      className="border-l-4 border-inherit bg-[linear-gradient(90deg,rgba(157,90,204,0.08)_0%,rgba(255,255,255,0.98)_38%,rgba(96,196,249,0.08)_100%)] px-5 py-5 sm:px-7 lg:px-10"
    >
      <article className="w-full rounded-xl border border-[color:var(--color-border)] bg-white p-5 sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--color-brand-purple-strong)]">
          Servicio seleccionado
        </p>
        <h4 className="mt-3 text-2xl font-semibold leading-tight text-[color:var(--color-ink)]">
          {service.name}
        </h4>
        <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)]">
          {service.detail.introduction}
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <h5 className="text-base font-semibold text-[color:var(--color-ink)]">
              Qué trabajamos
            </h5>
            <ul className="mt-3 space-y-2 text-base leading-7 text-[color:var(--color-muted)]">
              {service.detail.focus.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-brand-purple)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-base font-semibold text-[color:var(--color-ink)]">
              Para quién puede ser útil
            </h5>
            <p className="mt-3 text-base leading-8 text-[color:var(--color-muted)]">
              {service.detail.audience}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
