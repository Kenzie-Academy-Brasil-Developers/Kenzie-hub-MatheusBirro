import { InputForm } from "../../Forms/input"
import styles from "./style.module.scss"

export const EditTechModal = ({setEditIsOpen}) =>{
    return(
        <div className={styles.modalOverlay}>
            <div className={styles.modalBox}>
                <div className={styles.modal__header}>
                    <h3>Tecnologia Detalhes</h3>
                    <button className={styles.closeButton} onClick={() =>{setEditIsOpen(false)}}>X</button>
                </div>
                <div className={styles.container__form_post}>
                    <form action="" className={styles.form}>
                        <InputForm label="Nome do projeto" type="text" placeholder="Typescript" />
                        <label className={styles.label__select} htmlFor="dificuldty">Status</label>
                        <select name="dificuldty" id="dificuldty" >
                            <option value="">Iniciante</option>
                            <option value="">Intermediário</option>
                            <option value="">Avançado</option>
                        </select>
                        <button>Salvar Alterações</button>
                    </form>
                </div>
            </div>
        </div>
    )
}