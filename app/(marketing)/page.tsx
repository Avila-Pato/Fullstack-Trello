import { Medal } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Importando fonts
const headingFont = localFont({
  src: "../fonts/ChunkFive-Regular.otf",
});

// Importando TitleFont
const TitleFont = localFont({
  src: "../fonts/Kanit/RubikMaps-Regular.ttf",
});

// Otras fuentes
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Marketing = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div
          className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700
         rounded-full uppercase"
        >
          <Medal className="h-6 w-6 mr-2" />
          No. 1 Gestión de Tareas
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          SyncTask Ayuda al equipo en productividad
        </h1>
        {/* Aplicando TitleFont aquí */}
        <div
          className={cn(
            "text-2xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit",
            TitleFont.className // Se aplica la clase de TitleFont
          )}
        >
          Avanza con tu equipo
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Colabora, gestiona proyectos y alcanza nuevos picos de productividad.
        Desde oficinas a rascacielos hasta tu hogar, cada equipo tiene su forma
        única de trabajar. ¡Logra todo esto con SyncTask!
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Obten SyncTask Gratis</Link>
      </Button>
    </div>
  );
};

export default Marketing;
