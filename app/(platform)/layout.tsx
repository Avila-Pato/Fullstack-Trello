
// Este patrón es útil en  toda la jerarquía de 
// componentes tenga acceso a la funcionalidad de autenticación de Clerk, 
// como la gestión de sesiones de usuario y acceso a información del usuario autenticado.

import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'

const PlatformLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  )
}

export default PlatformLayout