import React from 'react'
import { Outlet } from 'react-router';
import {NavItems} from '../../../components';
import {SidebarComponent} from '@syncfusion/ej2-react-navigations' 

const AdminLayout = () => {
  return (
    <div className='admin-layout'>
        <aside className='w-full max-w-[270px] hidden lg:block'>
            <SidebarComponent width={270} enableGestures={false}>
                <NavItems />
            </SidebarComponent>
        </aside>
        <aside className='childern'>
            <Outlet />
        </aside>
    </div>
  )
}

export default AdminLayout