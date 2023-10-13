import { Header } from "../header"
import styles from "./style.module.scss"

export const DefaultPage = ({children}) => {
    return(
        <>
            <Header />
            <main className={styles.main__login}>
                {children}
            </main>
        </>
    )
}