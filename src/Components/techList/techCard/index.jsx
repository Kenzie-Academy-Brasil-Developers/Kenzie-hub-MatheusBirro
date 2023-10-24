import { useContext, useState } from "react"
import styles from "./style.module.scss"
import { EditTechModal } from "../../Modal/EditTechModal"
import { TechContext } from "../../../Providers/techProviders"

export const TechCard = ({tech}) => {
    const [loading, setLoading] = useState(false)

    const {removeTech, editingTech, setEditingTech} = useContext(TechContext)

    return (
        <>
        {loading ? 
            <small className={styles.text__delete}>Deletando</small> : 
            
            <li key={tech.id} className={styles.content__card}>
                <h3>{tech.title}</h3>
                <div className={styles.content__status_card}>
                    <p>{tech.status}</p>
                    <div>
                        <button className={styles.btn__edit} onClick={() => { setEditingTech(tech) }}></button>
                        <button className={styles.btn__delete} onClick={() => { removeTech(tech.id, setLoading) }}></button>
                    </div>
                </div>
                {editingTech ? <EditTechModal /> : null}
            </li>
        }
        </>
    )
}