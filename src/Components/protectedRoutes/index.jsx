import { useContext } from "react"
import { UserContext } from "../../Providers/userContext"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {
    const {userProfile} = useContext(UserContext)
    return Object.keys(userProfile).length !== 0 ? <Outlet/> : <Navigate to="/" />
}