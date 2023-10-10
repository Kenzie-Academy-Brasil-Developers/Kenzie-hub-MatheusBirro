import { useForm } from "react-hook-form"
import { InputForm } from "../input"
import { Link } from "react-router-dom";
import styles from "./style.module.scss"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchemaLogin } from "../../formSchema";
import { useNavigate } from "react-router-dom";
import { api } from "../../../Services/api";

export const LoginForm = ({userProfile, setUserProfile}) => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(formSchemaLogin),
    });

    const userLogin = async (payload) =>{
        try{
            const {data} = await api.post("sessions", payload)
            setUserProfile(data.user)
            localStorage.setItem("@tokenUser", JSON.stringify(data.token))
            navigate("/dashboard")
        }catch (error){
            console.log(error);
        }
    }

    const submit = (payload) => {
        userLogin(payload)
    }

    return(
        <form className={styles.form__container} onSubmit={handleSubmit(submit)}>
            <InputForm label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")} error={errors.email}/>
            <InputForm label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")} error={errors.password}/>
            <button type="submit">Entrar</button>
            <small>Ainda não possui uma conta?</small>
            <Link to="/register" className={styles.btn__navigate}>Cadastre-se</Link>
        </form>
    )
}
