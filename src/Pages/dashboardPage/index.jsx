import styles from "./style.module.scss"
import logo from "../../Assets/logo.svg"
import { useContext } from "react"
import { UserContext } from "../../Providers/userContext"

export const DashboardPage = () =>{

    const {userProfile, userLogout} = useContext(UserContext)

    return (
        <>
            <header className={styles.header__dashboard}>
                <img src={logo} alt="logo
                " />
                <button className={styles.header__btn} onClick={()=> {userLogout()}}>Sair</button>
            </header>
            <main className={styles.main__dashboard}>
                <div className={styles.border__container}>
                    <div>
                        <h2>{`Olá, ${userProfile.name}`}</h2>
                        <p>{userProfile.course_module}</p>
                    </div>
                </div>
                <div>
                    <h3>{`Que pena! Estamos em desenvolvimento :(`}</h3>
                    <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>
            </main>
        </>
    )
}