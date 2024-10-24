import Logo from '@/assets/logo';
import { Button } from '@/components/ui/button';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import React from 'react';

export const Navbar = () => {
  return (
    <div className='fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center'>
      {/* Mobile Sidebar */}
      <div className='flex items-center gap-x-4'>
        <div className='hidden md:flex'>
          <Logo />
        </div>
        <Button size="sm" className='rounded-md hidden md:block h-auto py-1.5 px-2'>
          Crear
        </Button>
        <Button size="sm" className='rounded-sm block md:hidden'>
          <Plus />
        </Button>
      </div>
      <div className='ml-auto flex items-center gap-x-2'>
        <OrganizationSwitcher 
          hidePersonal 
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl='/select-org'
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
              }
            }
          }} 
        />
        <UserButton 
          afterSignOutUrl='/'  // Redirige a la página principal después de cerrar sesión
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
                marginRight: '10px',
              }
            }
          }}
        />
      </div>
    </div>
  );
}
