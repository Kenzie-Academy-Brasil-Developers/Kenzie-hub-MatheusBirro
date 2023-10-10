import { Link } from "react-router-dom"
import { RegisterForm } from "../../Components/Forms/RegisterForm"
import styles from "./style.module.scss"
import logo from "../../Assets/logo.svg"

export const RegisterPage = () =>{
    return (
        <>
        <div className={styles.logo__header}>
            <img src={logo} alt="Logo" />
            <Link className={styles.header__btn} to="/">Voltar</Link>
        </div>
        <main className={styles.main__register}>
            <h2>Crie sua conta</h2>
            <small>Rápido e grátis, vamos nessa</small>
            <RegisterForm />
        </main>
        </>
    )
}