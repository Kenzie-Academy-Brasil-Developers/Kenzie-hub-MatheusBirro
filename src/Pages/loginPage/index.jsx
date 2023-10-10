import { LoginForm } from "../../Components/Forms/loginForm"
import styles from "./style.module.scss"
import logo from "../../Assets/logo.svg"

export const LoginPage = ({userProfile, setUserProfile}) =>{
    return (
        <>
        <header>
            <img src={logo} alt="Logo" className={styles.logo__header}/>
        </header>
        <main className={styles.main__login}>
            <h2>Login</h2>
            <LoginForm userProfile={userProfile} setUserProfile={setUserProfile}/>
        </main>
        </>
    )
}