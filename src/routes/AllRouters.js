import React, { useState } from 'react'
import {  Route, RouterProvider,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MyHome from '../MyHome';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const AllRouters = () => {
    const [user, setUser] = useState("")
    const handleLogout = ()=>{
        setUser("")
    }
    const router = createBrowserRouter(
        createRoutesFromElements(
            [
                <Route path="/home" element={<MyHome />} />,
                <Route path="/" element={<PrivateRoute user={user} />}>
                    <Route path="" element={<Dashboard user= {user} onLogout={handleLogout}/>} />
                </Route>,
                <Route path="/login" element={<Login setUser={setUser}/>} />,
            ]
        )
    );
    return (
        <>
            <RouterProvider router={router} />

        </>

    )
}

export default AllRouters