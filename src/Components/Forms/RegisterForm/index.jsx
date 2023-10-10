import { useForm } from "react-hook-form"
import { InputForm } from "../input"
import styles from "./style.module.scss"

export const RegisterForm = () => {
    const { register, handleSubmit} = useForm();

    const submit = (payload) => {
        console.log(payload)
    }

    return(
        <form className={styles.form__container} onSubmit={handleSubmit(submit)}>
            <InputForm label="Nome" type="text" placeholder="Digite aqui seu nome" {...register("name")}/>
            <InputForm label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")}/>
            <InputForm label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")}/>
            <InputForm label="Confirmar Senha" type="password" placeholder="Confirme sua senha" {...register("password")}/>
            <InputForm label="Bio" type="text" placeholder="Fale sobre você" {...register("bio")}/>
            <InputForm label="Contato" type="tel" placeholder="Opção de contato" {...register("contact")}/>
            <label className={styles.label__select} htmlFor="module">Selecionar Módulo</label>
            <select name="" id="" >
                <option value="">Primeiro Módulo</option>
                <option value="">Segundo Módulo</option>
                <option value="">Terceiro Módulo</option>
                <option value="">Quarto Módulo</option>
                <option value="">Quinto Módulo</option>
                <option value="">Sexto Módulo</option>
            </select>
            <button type="submit">Cadastrar</button>
        </form>
    )
}
