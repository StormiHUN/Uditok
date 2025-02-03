import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='w-1/2 mx-auto border rounded-md bg-white'>
            <div className='border-b'>
                <div className='p-4 flex justify-between gap-2'>
                    <div className='flex gap-2'>
                        <Link className='rounded-md bg-teal-200 hover:bg-teal-400 transition-all p-2' to="/">Üditők</Link>
                        <Link className='rounded-md bg-teal-200 hover:bg-teal-400 transition-all p-2' to="/szerkeszt">Szerkeszt</Link>
                    </div>
                    <Link className='rounded-md bg-teal-200 hover:bg-teal-400 transition-all p-2' to="/nevjegy">Névjegy</Link>
                </div>
            </div>
            <div className='p-4'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
