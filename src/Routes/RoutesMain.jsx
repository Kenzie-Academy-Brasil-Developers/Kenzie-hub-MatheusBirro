import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../Pages/dashboardPage"
import { LoginPage } from "../Pages/loginPage"
import { RegisterPage } from "../Pages/registerPage"

export const RoutesMain = () =>{
    return(
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/dashboard" element={<DashboardPage />}/>
        </Routes>
    )
}