import { useContext, useState } from "react"
import { InputForm } from "../../Forms/input"
import styles from "./style.module.scss"
import { TechContext } from "../../../Providers/techProviders"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchemaCreateTech } from "../../formSchema"

export const EditTechModal = () =>{
    const {editTech, editingTech, setEditingTech} = useContext(TechContext)
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: {errors}} = useForm({
        values:{
            title: editingTech.title,
            status: editingTech.status,
        },
        resolver: zodResolver(formSchemaCreateTech)
    })

    const submit = (payload) => {
        editTech(payload.status, setLoading, editingTech.id)
    }

    return(
        <div className={styles.modalOverlay}>
            <div className={styles.modalBox}>
                <div className={styles.modal__header}>
                    <h3>Tecnologia Detalhes</h3>
                    <button className={styles.closeButton} onClick={() =>{setEditingTech(null)}}>X</button>
                </div>
                <div className={styles.container__form_post}>
                    <form action="" className={styles.form} onSubmit={handleSubmit(submit)}>
                        <InputForm label="Nome do projeto" type="text" placeholder="Typescript" {...register("title")}  error={errors.title} disabled={true}/>
                        <label className={styles.label__select} htmlFor="status">Status</label>
                        <select name="status" id="status" {...register("status")} error={errors.status}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <button type="submit">Salvar Alterações</button>
                    </form>
                </div>
            </div>
        </div>
    )
}