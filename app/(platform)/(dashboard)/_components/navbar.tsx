import Logo from '@/assets/logo';
import { Button } from '@/components/ui/button';
import { MobileSidebar } from '@/app/(platform)/(dashboard)/_components/mobile-sidebar';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import React from 'react';

export const Navbar = () => {
  return (
    <div className='fixed z-50 top-0 w-full h-12 border-b shadow-md bg-white flex items-center px-4'>
      {/* Mobile Sidebar */}
      <MobileSidebar />
      <div className='flex items-center gap-x-4'>
        <div className='hidden md:flex'>
          <Logo />
        </div>
        <Button size="sm" className='rounded-md hidden md:block h-7 py-auto px-4 text-sm font-medium bg-blue-700 text-white hover:bg-blue-600'>
          Crear
        </Button>
        <Button size="sm" className='rounded-md block md:hidden p-2 bg-blue-500 text-white hover:bg-blue-600'>
          <Plus size={16} />
        </Button>
      </div>

      <div className='ml-auto flex items-center gap-x-4'>
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
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
              }
            }
          }} 
        />
        <UserButton 
          afterSignOutUrl='/'  // Redirige a la página principal después de cerrar sesión
          appearance={{
            elements: {
              avatarBox: {
                height: 36,
                width: 36,
                marginRight: '0px',
                borderRadius: '50%',
                border: '2px solid #e0e0e0',
              }
            }
          }}
        />
      </div>
    </div>
  );
}
