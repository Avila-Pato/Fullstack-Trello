

// Este middleware permite que tu aplicación Next.js utilice Clerk para manejar la
//  autenticación de los usuarios. Protegerá las rutas según las reglas definidas, 
//  asegurando que solo los usuarios autenticados puedan acceder a ciertas partes de la aplicación.

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Se define un matcher que permite el acceso público a las rutas /sign-in y /sign-up.
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}