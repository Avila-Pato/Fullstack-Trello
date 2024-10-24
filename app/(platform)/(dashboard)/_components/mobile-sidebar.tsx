"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Sidebar } from "@/app/(platform)/(dashboard)/_components/sidebar";

export const MobileSidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  // Asegura que el componente se monte.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Cierra el sidebar cuando cambia la ruta.
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Botón para abrir el menú en vistas móviles */}
      <Button
        onClick={onOpen}
        className="block md:hidden"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4" />
      </Button>
      
      {/* Componente de "Sheet" para el sidebar */}
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side="left"
          className="p-2 pt-10"
        >
          <Sidebar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
};