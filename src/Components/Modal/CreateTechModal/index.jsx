import { useForm } from "react-hook-form";
import { InputForm } from "../../Forms/input"
import styles from "./style.module.scss"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchemaCreateTech } from "../../formSchema";
import { useContext, useState } from "react";
import { TechContext } from "../../../Providers/techProviders";

export const CreateTechModal = ({setCreateIsOpen}) =>{
    const [loading, setLoading] = useState(false)

    const {createTech} = useContext(TechContext)

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(formSchemaCreateTech)
    })

    const submit = (payload) => {
        createTech(payload, setLoading, setCreateIsOpen(false))
    }

    return(
        <div className={styles.modalOverlay} onSubmit={handleSubmit(submit)}>
            <div className={styles.modalBox}>
                <div className={styles.modal__header}>
                    <h3>Cadastrar Tecnologias</h3>
                    <button className={styles.closeButton} onClick={() =>{setCreateIsOpen(false)}}>X</button>
                </div>
                <div className={styles.container__form_post}>
                    <form action="" className={styles.form}>
                        <InputForm label="Nome" type="text" placeholder="Typescript" {...register("title")}  error={errors.title}/>
                        <label className={styles.label__select} htmlFor="status">Selecionar Status</label>
                        <select name="status" id="staus" {...register("status")} error={errors.status}>
                            <option value="">Selecione uma dificuldade</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        {errors.status? <small>{errors.status.message}</small> : null}
                        <button type="submit" disabled={loading}>Cadastrar Tecnologia</button>
                    </form>
                </div>
            </div>
        </div>
    )
}