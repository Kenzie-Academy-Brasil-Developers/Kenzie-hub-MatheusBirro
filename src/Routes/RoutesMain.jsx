import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../Pages/dashboardPage"
import { LoginPage } from "../Pages/loginPage"
import { RegisterPage } from "../Pages/registerPage"
import { ProtectedDashboard, ProtectedLogin } from "../Components/protectedRoutes"

export const RoutesMain = () =>{

    return (
        <Routes>
            <Route path="/" element={<ProtectedLogin />}>
                <Route index element={<LoginPage />} />
            </Route>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<ProtectedDashboard />}>
                <Route index element={<DashboardPage />} />
            </Route>
        </Routes>
    )
}