import { useContext } from "react"
import { UserContext } from "../../Providers/userContext"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedDashboard = () => {
    const {userProfile} = useContext(UserContext)
    return Object.keys(userProfile).length !== 0 ? <Outlet/> : <Navigate to="/" />
}

export const ProtectedLogin = () => {
    const {userProfile} = useContext(UserContext)
    console.log(userProfile);
    return Object.keys(userProfile).length === 0 ? <Outlet/> : <Navigate to="/dashboard" />
}