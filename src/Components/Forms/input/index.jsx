import { forwardRef } from "react"
import styles from "./style.module.scss"

export const InputForm = forwardRef (({label, id, ...rest}, ref) => {
    return(
        <>
            <label htmlFor={id} className={styles.login__label}>{label}</label>
            <input className={styles.login__input} ref={ref} {...rest} />
        </>
    )
})