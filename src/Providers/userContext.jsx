import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../Services/api"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [userProfile, setUserProfile] = useState(null)

    const navigate = useNavigate()

    const userLogin = async (payload) =>{
        try{
            const {data} = await api.post("sessions", payload)
            setUserProfile(data.user)
            localStorage.setItem("@tokenUser", JSON.stringify(data.token))
            navigate("/dashboard")
        }catch (error){
            console.error(error)
        }
    }

    const userLogout = () =>{
        setUserProfile(null)
        localStorage.removeItem("@tokenUser")
        navigate("/")
    }

    const userRegister =  async (payload) =>{
        try{
            const {data} = await api.post("users", payload)
            navigate("/")
            toast("Conta criada com sucesso!")
        }catch (error){
            toast.error("Ops! Algo deu errado")
        }
    }

    return(
        <UserContext.Provider value={{userProfile, setUserProfile, userLogin, userLogout, userRegister}}>
            {children}
        </UserContext.Provider>
    )
}
