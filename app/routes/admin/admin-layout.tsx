import React from 'react'
import { Outlet } from 'react-router';

const AdminLayout = () => {
  return (
    <div className='admin-layout'>
        Mobilesidbar
        <aside className='w-full max-w-[270px] hidden lg:block'>sidebar</aside>
        <aside className='childern'>
            <Outlet />
        </aside>
    </div>
  )
}

export default AdminLayout