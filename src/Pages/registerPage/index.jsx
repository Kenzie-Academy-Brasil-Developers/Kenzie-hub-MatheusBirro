import { Link } from "react-router-dom"
import { RegisterForm } from "../../Components/Forms/RegisterForm"

export const RegisterPage = () =>{
    return (
        <>
        <div>
            <h1>Kenzie Hub</h1>
            <Link to="/">Voltar</Link>
        </div>
        <main>
            <h2>Crie sua conta</h2>
            <small>Rápido e grátis, vamos nessa</small>
            <RegisterForm />
        </main>
        </>
    )
}