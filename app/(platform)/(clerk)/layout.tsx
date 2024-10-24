import React from 'react'

// Recibe como propiedad: children, que son los elementos que se pasan al componente.
// Renderiza: un div que utiliza clases de Tailwind CSS para centrar su contenido vertical
//  y horizontalmente.

//  Uso: Se emplea para envolver otros componentes o páginas, proporcionando un diseño centrado,
//   ideal para interfaces de autenticación como formularios de inicio de sesión o registro.

const ClerkLayout = ({ children }: {
    children: React.ReactNode
}) => {
  return (
    <div className='h-full flex items-center justify-center min-h-screen'>
        {children}
    </div>
  )
}

export default ClerkLayout