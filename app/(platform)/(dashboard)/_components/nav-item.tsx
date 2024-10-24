/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; // Indica que este componente se ejecuta en el cliente.

import { cn } from "@/lib/utils";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; // Importa componentes de Radix UI para el acordeón.
import {
    Activity,
    CreditCard,
    Layout,
    Settings,
} from "lucide-react"
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

interface NavItemProps {
  isExpanded: boolean; // Indica si este elemento está expandido.
  isActive: boolean; // Indica si este elemento es el activo.
  organization: Organization; // Objeto que contiene la información de la organización.
  onExpand: (id: string) => void; // Función que se llama al expandir el acordeón.
}

export const NavItem = ({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: NavItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      label: "Boards",
      icon: <Layout className="h-4 w-4 mr-2"/>,
      href: `/organization/${organization.id}`,
    },
    {
      label: "Activity",
      icon: <Activity className="h-4 w-4 mr-2"/>,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4 mr-2"/>,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: "Billing",
      icon: <CreditCard className="h-4 w-4 mr-2"/>,
      href: `/organization/${organization.id}/billing`,
    }
  ];

  const onCLick = (href: string) => {
    router.push(href); // Cambia la ruta al hacer clic en un ítem del acordeón.
  }

  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)} // Llama a la función onExpand con el ID de la organización.
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition no-underline hover:no-underline",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700" // Aplica clases adicionales si el ítem está activo y no expandido.
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image 
              fill
              src={organization.imageUrl}
              alt="Organization"
              className="rounded-sm object-cover"
            />
          </div>
          <span className="font-medium text-sm">
            {organization.name}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {routes.map((route) => {
          return ( // Agregar return aquí
            <Button
              key={route.href}
              size="sm"
              onClick={() => onCLick(route.href)} // Asegúrate de que el nombre de la función sea onClick
              className={cn(
                "w-full font-normal justify-start pl-10 mb-1", 
                pathname === route.href && "bg-sky-500/10 text-sky-700"
              )}
              variant="ghost"
            >
              {route.icon}
              {route.label}
            </Button>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
};
