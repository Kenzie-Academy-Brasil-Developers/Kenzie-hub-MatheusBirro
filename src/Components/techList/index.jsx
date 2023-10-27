import { useContext } from "react"
import styles from "./style.module.scss"
import { TechCard } from "./techCard"
import { UserContext } from "../../Providers/userContext"

export const TechList = () => {
    const {techs} = useContext(UserContext)
    
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