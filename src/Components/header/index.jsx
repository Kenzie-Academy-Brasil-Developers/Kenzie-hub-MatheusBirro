import logo from "../../Assets/logo.svg"
import styles from "./style.module.scss"

export const Header = () => {
    return(
        <header>
            <img src={logo} alt="Logo" className={styles.logo__header}/>
        </header>
    )
}