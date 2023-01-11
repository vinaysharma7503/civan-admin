import Header from '@Shared/Header/Header'
import Sidebar from '@Shared/Sidebar/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const User = (props: Props) => {
    return (
        <div className='md:flex h-screen'>
            <Sidebar />
            <div className="md:flex-auto relative">
                <Header />
                <div className="h-80">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default User