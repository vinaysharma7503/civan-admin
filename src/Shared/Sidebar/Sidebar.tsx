import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logopng.png'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='hidden lg:block shadow-lg relative w-60 overflow-auto'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div>
            <nav className="mt-5">
                <div>
                    <NavLink className="w-full font-thin text-gray-500 md:flex items-center p-2 my-2" to='/'>
                        <span className='mx-4 text-sm font-normal'>Dashboard</span>
                    </NavLink>
                    <NavLink className="w-full font-thin text-gray-500 md:flex items-center p-2 my-2" to='/users'>
                        <span className='mx-4 text-sm font-normal'>Users</span>
                    </NavLink>
                    <NavLink className="w-full font-thin text-gray-500 md:flex items-center p-2 my-2" to='/qrs'>
                        <span className='mx-4 text-sm font-normal'>Qr Codes</span>
                    </NavLink>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Sidebar