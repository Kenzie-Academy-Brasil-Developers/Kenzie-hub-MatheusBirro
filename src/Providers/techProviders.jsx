import { createContext, useContext, useEffect, useState} from "react"
import { UserContext } from "./userContext"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { api } from "../Services/api"

export const TechContext = createContext({})

export const TechProviders = ({children}) => {
    const {userProfile} = useContext(UserContext)
    const [techs, setTechs] = useState([])

    const createTech =  async (payload, setLoading, setCreateIsOpen) =>{
        const token = JSON.parse(localStorage.getItem("@tokenUser"))

        try{
            setLoading(true)
            const {data} = await api.post("users/techs", payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setTechs([...techs, data])
            setCreateIsOpen(false)
            toast("Tech criada com sucesso")
        }catch (error){
            if (error.response.data.message === "User Already have this technology created you can only update it") {
                toast.error("Nome de tecnologia já existente")
            }else{
                toast.error("Ops! Algo deu errado")
            }
        }finally{
            setLoading(false)
        }
    }

    const removeTech = async(id, setLoading) =>{
        const token = JSON.parse(localStorage.getItem("@tokenUser"))

        try{
            setLoading(true)
            const {data} = await api.delete(`users/techs/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log(data);
            const newTechs = techs.filter((tech) => tech.id !== id)
            setTechs(newTechs)
            toast("Tech deletada com sucesso")
        }catch (error){
            toast.error("Ops! Algo deu errado")  
        }finally{
            setLoading(false)
        }
    }

    useEffect(() =>{
        setTechs(userProfile.techs)
    },[userProfile])

    return (
        <TechContext.Provider value={{techs, createTech, removeTech}}>
            {children}
        </TechContext.Provider>
    )
}