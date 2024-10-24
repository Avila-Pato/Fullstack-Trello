"use client"; // Indica que este componente se ejecuta en el cliente, necesario para usar hooks como useEffect.

import { useOrganizationList } from "@clerk/nextjs"; // Importa el hook de Clerk para manejar la lista de organizaciones.
import { useParams } from "next/navigation"; // Importa el hook de Next.js para obtener los parámetros de la URL.
import { useEffect } from "react"; // Importa useEffect, un hook para manejar efectos secundarios.

export const OrgControl = () => {
    const params = useParams(); // Obtiene los parámetros de la URL (en este caso, 'organizationId').
    const { setActive } = useOrganizationList(); // Extrae la función setActive de useOrganizationList para establecer una organización activa.

    useEffect(() => {
        if (!setActive) return; // Si setActive no está definido, no hace nada y retorna.

        setActive({
            organization: params.organiztionId as string, // Establece la organización activa usando el 'organizationId' de los parámetros de la URL.
        });
    }, [setActive, params.organiztionId]); // Ejecuta este efecto cada vez que cambien setActive o organizationId.

    return null; // El componente no tiene salida visible, solo ejecuta la lógica.
};
