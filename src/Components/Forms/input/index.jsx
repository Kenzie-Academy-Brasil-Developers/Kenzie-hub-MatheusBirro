import { forwardRef } from "react"
import styles from "./style.module.scss"

export const InputForm = forwardRef (({label, id, ...rest}, ref) => {
    return(
        <>
            <label htmlFor={id}>{label}</label>
            <input ref={ref} {...rest} />
        </>
    )
})