"use client"; // Indica que este componente se ejecuta en el cliente.

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization, useOrganizationList } from "@clerk/nextjs"; // Importa los hooks de Clerk para manejar organizaciones.
import { Accordion } from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts"; // Importa useLocalStorage de 'usehooks-ts'.
import { NavItem, Organization } from "./nav-item";

interface SidebarProps {
  storageKey?: string; // Define la propiedad opcional storageKey, que se usa para almacenar el estado del sidebar.
}

export const Sidebar = ({
  storageKey = "t-sidebar-state", // Establece un valor por defecto para la clave de almacenamiento.
}: SidebarProps) => {
  // Usa el hook useLocalStorage para almacenar el estado del sidebar en el almacenamiento local.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {} // El valor predeterminado es un objeto vacío.
  );

  // Obtiene la organización activa y su estado de carga.
  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();

  // Obtiene la lista de membresías del usuario y su estado de carga.
  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true, // Configura la obtención de membresías de manera infinita (paginación).
    },
  });

  // Establece un valor por defecto para el acordeón, basado en las claves que están expandidas.
  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key); // Agrega al array las claves que están expandidas.
      }
      return acc;
    },
    []
  );

  // Función que alterna el estado de expansión de un item.
  const onExpanded = (id: string) => {
    setExpanded((curr) => ({
      ...curr, // Mantiene el estado actual.
      [id]: !expanded[id], // Alterna el estado del item correspondiente.
    }));
  };

  // Verifica si los datos de las organizaciones y membresías están cargando.
  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <>
        <Skeleton />{" "}
        {/* Muestra un componente de carga mientras los datos no están disponibles. */}
      </>
    );
  }

  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4 font-bold">Trabajos</span>
        <Button
          asChild
          type="button"
          size="icon"
          variant="ghost"
          className="ml-auto"
        >
          <Link href="/select-org">
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Accordion 
      type="multiple"
      defaultValue={defaultAccordionValue}
      className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => (
            <NavItem 
            key ={organization.id}
            isActive={activeOrganization?.id === organization.id }
            isExpanded = {expanded[organization.id]}
            organization={organization as Organization}
            onExpand={onExpanded}
            />
        ))}

      </Accordion>
    </>
  );
};
