import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../Pages/dashboardPage"
import { LoginPage } from "../Pages/loginPage"
import { RegisterPage } from "../Pages/registerPage"
import { ProtectedDashboard, ProtectedLogin } from "../Components/protectedRoutes"
import { TechProviders } from "../Providers/techProviders"

export const RoutesMain = () =>{

    return (
        <Routes>
            <Route path="/" element={<ProtectedLogin />}>
                <Route index element={<LoginPage />} />
            </Route>

            <Route path="/register" element={<ProtectedLogin />}>
                <Route index element={<RegisterPage />} />
            </Route>

            <Route path="/dashboard" element={<ProtectedDashboard />}>
                <Route index element={
                    <TechProviders>
                        <DashboardPage />
                    </TechProviders>} />
            </Route>
        </Routes>
    )
}