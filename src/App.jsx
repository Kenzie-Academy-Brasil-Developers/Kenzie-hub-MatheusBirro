import { ToastContainer } from "react-toastify"
import { RoutesMain } from "./Routes/RoutesMain"
import "./Styles/globalStyles.scss"
import { useContext } from "react"
import { UserContext } from "./Providers/userContext"

function App() {
  const {loading} = useContext(UserContext)
  return (
    <>
      {loading ? <div>Carregando...</div> : <RoutesMain />}
      <ToastContainer position="top-right"/>
    </>
  )
}

export default App
