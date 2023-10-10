import { Link } from "react-router-dom"
import styles from "./style.module.scss"
import logo from "../../Assets/logo.svg"

export const DashboardPage = () =>{
    return (
        <>
            <header className={styles.header__dashboard}>
                <img src={logo} alt="logo
                " />
                <Link className={styles.header__btn} to="/">Sair</Link>
            </header>
            <main className={styles.main__dashboard}>
                <div className={styles.border__container}>
                    <div>
                        <h2>Olá, Samuel Leão</h2>
                        <p>{`Primeiro módulo (Introdução ao Frontend)`}</p>
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