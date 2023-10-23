import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../Services/api"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [userProfile, setUserProfile] = useState({})
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const userLogin = async (payload, setLoading) =>{
        try{
            setLoading(true)
            const {data} = await api.post("sessions", payload)
            setUserProfile(data.user)
            localStorage.setItem("@tokenUser", JSON.stringify(data.token))
            navigate("/dashboard")
        }catch (error){
            if (error.response.data.message === "Incorrect email / password combination") {
                toast.error("Email ou senha incorreto")
            }else{
                toast.error("Ops! Algo deu errado")
            }
        }finally{
            setLoading(false)
        }
    }

    const userLogout = () =>{
        toast.warning("Deslogado")
        setUserProfile({})
        localStorage.removeItem("@tokenUser")
        navigate("/")
    }

    const userRegister =  async (payload, setLoading) =>{
        try{
            setLoading(true)
            const {data} = await api.post("users", payload)
            navigate("/")
            toast("Conta criada com sucesso!")
        }catch (error){
            if (error.response.data.message === "Email already exists") {
                toast.error("Email já cadastrado")
            }else{
                toast.error("Ops! Algo deu errado")
            }
        }finally{
            setLoading(false)
        }
    }

    useEffect(() =>{
        const loadUser = async() =>{
            const token = JSON.parse(localStorage.getItem("@tokenUser"))

            if (token) {
                try {
                    setLoading(true)
                    const {data} = await api.get("profile",{
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    setUserProfile(data)
                }catch (error) {
                    console.error(error)
                    localStorage.removeItem("@tokenUser")
                }finally{
                    setLoading(false)
                }
            }
        }
        loadUser()
    },[])

    return(
        <UserContext.Provider value={{userProfile, setUserProfile, loading, userLogin, userLogout, userRegister}}>
            {children}
        </UserContext.Provider>
    )
}
