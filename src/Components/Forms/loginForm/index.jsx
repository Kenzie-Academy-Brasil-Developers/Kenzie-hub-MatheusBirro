import { useForm } from "react-hook-form"
import { InputForm } from "../input"
import { Link } from "react-router-dom"
import styles from "./style.module.scss"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchemaLogin } from "../../formSchema"
import { useContext } from "react"
import { UserContext } from "../../../Providers/userContext"

export const LoginForm = () => {
    const {userLogin} = useContext(UserContext)

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(formSchemaLogin),
    });

    const submit = (payload) => {
        userLogin(payload)
    }

    return(
        <form className={styles.form__container} onSubmit={handleSubmit(submit)}>
            <InputForm label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")} error={errors.email}/>
            <InputForm label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")} error={errors.password}/>
            <button type="submit">Entrar</button>
            <small className={styles.register__info}>Ainda não possui uma conta?</small>
            <Link to="/register" className={styles.btn__navigate}>Cadastre-se</Link>
        </form>
    )
}
