import React, { Suspense,lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.scss'
const DashboardPage = lazy(()=>import("@Pages/Dashboard/Dashboard"));
const DashboardOverviewPage = lazy(()=>import("@Pages/Dashboard/DashboardOverview"));
const UserPage = lazy(()=>import("@Pages/User/User"));
const UserListPage = lazy(()=>import("@Pages/User/UserList"));
const QrPage = lazy(()=>import("@Pages/Qr/Qr"));
const QrListPage = lazy(()=>import("@Pages/Qr/QrList"));

const App=()=> {
const routes = useRoutes([
  {path:"/",element:<DashboardPage/>,children:[
    {path:"",element:<DashboardOverviewPage/>}
  ]},
  {path:"/users",element:<UserPage/>,children:[
    {path:"",element:<UserListPage/>}
  ]},
  {path:"/qrs",element:<QrPage/>,children:[
    {path:"",element:<QrListPage/>}
  ]},
])
  return (
    <>
    <Suspense fallback="Loading...">{routes}</Suspense>
    </>
  )
}

export default App
