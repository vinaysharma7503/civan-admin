import React, { useEffect, useState } from 'react'
import { dashboardData } from './Services/dashboardService';

type Props = {}

const DashboardOverview = (props: Props) => {
    const [dashboard, setDashboard] = useState<any>();
    useEffect(() => {
        dashboardData(dashboardDataCB)
    }, [!dashboard])

    const dashboardDataCB = async (result: any) => {
        if (result) {
            setDashboard(result?.data?.data)
        }
    }
    return (
        <div className='container'>
            <div className="py-2">
                <div className="md:flex justify-between items-center mt-1 p-4">
                    <div className="md:flex md:flex-col shadow rounded p-2 w-36">
                        <span className='text-black text-center'>Total Users</span>
                        <span className='text-center'>{dashboard?.totalUser}</span>
                    </div>
                    <div className="md:flex md:flex-col shadow rounded p-2 w-36">
                        <span className='text-black text-center'>Total Qr Tags</span>
                        <span className='text-center'>{dashboard?.totalQr}</span>
                    </div>
                    <div className="md:flex md:flex-col shadow rounded p-2 w-36">
                        <span className='text-black text-center'>Total Registered Qr Tags</span>
                        <span className='text-center'>{dashboard?.totalRegisteredQr}</span>
                    </div>
                    <div className="md:flex md:flex-col shadow rounded p-2 w-36">
                        <span className='text-black text-center'>Total Vehical Owners</span>
                        <span className='text-center'>{dashboard?.totalVehicalOwners}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardOverview