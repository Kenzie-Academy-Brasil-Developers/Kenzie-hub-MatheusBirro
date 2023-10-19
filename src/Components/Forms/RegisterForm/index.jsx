import { useForm } from "react-hook-form"
import { InputForm } from "../input"
import styles from "./style.module.scss"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchemaRegister } from "../../formSchema"
import 'react-toastify/dist/ReactToastify.css'
import { useContext, useState } from "react"
import { UserContext } from "../../../Providers/userContext"


export const RegisterForm = () => {
    const {userRegister} = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(formSchemaRegister)
    });

    const submit = (payload) => {
        userRegister(payload, setLoading)
    }

    return(
        <form className={styles.form__container} onSubmit={handleSubmit(submit)}>
            <InputForm label="Nome" type="text" placeholder="Digite aqui seu nome" {...register("name")}  error={errors.name}/>
            <InputForm label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")}  error={errors.email}/>
            <InputForm label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")}  error={errors.password}/>
            <InputForm label="Confirmar Senha" type="password" placeholder="Confirme sua senha" {...register("confirmPassword")}  error={errors.confirmPassword}/>
            <InputForm label="Bio" type="text" placeholder="Fale sobre você" {...register("bio")}  error={errors.bio}/>
            <InputForm label="Contato" type="tel" placeholder="Opção de contato" {...register("contact")}  error={errors.contact}/>
            <label className={styles.label__select} htmlFor="module">Selecionar Módulo</label>
            <select name="course_module" id="course_module" {...register("course_module")} error={errors.course_module}>
                <option value="">Selecione o Módulo</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
            </select>
            {errors.course_module? <small>{errors.course_module.message}</small> : null}
            <button type="submit" disabled={loading}>Cadastrar</button>
        </form>
    )
}
