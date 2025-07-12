import React from 'react'
import { Link, NavLink } from 'react-router';
import { sidebarItems } from '~/constants'; // Assuming SidebarItems is an array of objects with id, href, icons, and label
import { cn } from '~/lib/utils';


const NavItems = () => {
  return (
    <section className='nav-items'>
        <Link to='/ '>
            <img src="/public/images/logo.svg" alt="logo" className='w-10 h-10'/>
            <h1>Magic Travel</h1>
        </Link>
        <div className='container'>
            <nav>
                {sidebarItems.map(({id, href, icon, label} )=>(
                    <NavLink key={id} to={href}>
                        {({isActive}) => (
                            <div className={cn('group nav-item')}>
                                {label}
                            </div>
                        )}
                    </NavLink>
                ))}
            </nav>
        </div>
    </section>
  )
}

export default NavItems