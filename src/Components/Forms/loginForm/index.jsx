import { useForm } from "react-hook-form"
import { InputForm } from "../input"
import { Link } from "react-router-dom";
import styles from "./style.module.scss"

export const LoginForm = () => {
    const { register, handleSubmit} = useForm();

    const submit = (payload) => {
        console.log(payload)
    }

    return(
        <form className={styles.form__container} onSubmit={handleSubmit(submit)}>
            <InputForm label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")}/>
            <InputForm label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")}/>
            <button type="submit">Entrar</button>
            <small>Ainda não possui uma conta?</small>
            <Link to="/register" className={styles.btn__navigate}>Cadastre-se</Link>
            <Link to="/dashboard">dashboard</Link>
        </form>
    )
}
