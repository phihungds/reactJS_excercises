import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
import Users from "../components/Users";
import UserDetails from "../components/UserDetails";
 
export default function RootRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Users />} />
                <Route exact path={'/user/add'} element={<UserDetails />} />
                <Route exact path={`/user/:userId`} element={<UserDetails />} />
            </Routes>
        </BrowserRouter>
    )
}