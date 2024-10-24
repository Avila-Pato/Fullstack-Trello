import React from 'react'
import { Sidebar } from '../_components/sidebar';

const OrganizationLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
  return (
    /*Main Principal del dasboard Ajusta el Padding y margenes */
    <main className="pt-20 md:pt-24 mx-5 px-0max-w-6xl 2xl:max-w-screen-xl ">
        <div className="flex gap-x-7">
            <div className="w-64 shrink-0 hidden md:block">
            {/* SideBar */}
            <Sidebar />
            </div>
        {children}
        </div>
    </main>
)
}

export default OrganizationLayout