// (clerk): Carpeta opcional para encapsular funciones relacionadas con la autenticación 
// usando Clerk.

// sign-in: Carpeta para la lógica y componentes de la página de inicio de sesión.


// [[...sign-in]]: Ruta dinámica y opcional que puede manejar varias variaciones de la URL, 
//como /sign-in, /sign-in/, o /sign-in/alguna-cosa.




import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <SignIn />
}