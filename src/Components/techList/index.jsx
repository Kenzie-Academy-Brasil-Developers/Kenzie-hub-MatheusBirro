import { useContext } from "react"
import styles from "./style.module.scss"
import { TechContext } from "../../Providers/techProviders"
import { TechCard } from "./techCard"

export const TechList = () => {
    const {techs} = useContext(TechContext)
    
    return (
        <div className={styles.content__ul_post}>
            <ul>
                {techs.map((tech) => (
                    <TechCard key={tech.id} tech={tech} />
                ))}
            </ul>
        </div>
    )
}