import { LoginForm } from "../../Components/Forms/loginForm"
import styles from "./style.module.scss"
import logo from "../../Assets/logo.svg"

export const LoginPage = () =>{
    return (
        <>
        <header>
            <img src={logo} alt="" className={styles.logo__header}/>
        </header>
        <main>
            <h2>Login</h2>
            <LoginForm />
        </main>
        </>
    )
}