import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../Pages/dashboardPage"
import { LoginPage } from "../Pages/loginPage"
import { RegisterPage } from "../Pages/registerPage"
import { useState } from "react"

export const RoutesMain = () =>{

    const [userProfile, setUserProfile] = useState(null)

    return(
        <Routes>
            <Route path="/" element={<LoginPage userProfile={userProfile} setUserProfile={setUserProfile}/>}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/dashboard" element={<DashboardPage userProfile={userProfile} setUserProfile={setUserProfile}/>}/>
        </Routes>
    )
}