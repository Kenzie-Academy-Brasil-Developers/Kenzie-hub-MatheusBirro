import styles from "./style.module.scss"
import logo from "../../Assets/logo.svg"
import { useContext, useState } from "react"
import { UserContext } from "../../Providers/userContext"
import { CreateTechModal } from "../../Components/Modal/CreateTechModal"
import { EditTechModal } from "../../Components/Modal/EditTechModal"
import { TechContext } from "../../Providers/techProviders"

export const DashboardPage = () =>{

    const {userProfile, userLogout} = useContext(UserContext)
    const [createIsOpen, setCreateIsOpen] = useState(false)
    const [editIsOpen, setEditIsOpen] = useState(false)
    const {techs, removeTech} = useContext(TechContext)
    const [loading, setLoading] = useState(false)

    return (
        <>
            <header className={styles.header__dashboard}>
                <img src={logo} alt="logo
                " />
                <button className={styles.header__btn} onClick={()=> {userLogout()}}>Sair</button>
            </header>
            <main className={styles.main__dashboard}>
                <div className={styles.border__container}>
                    <div className={styles.div__container}>
                        <h2>{`Olá, ${userProfile.name}`}</h2>
                        <p>{userProfile.course_module}</p>
                    </div>
                </div>
                <div className={styles.div__container}>
                    <div className={styles.content__post}>
                        <h3>Tecnologias</h3>
                        <button onClick={() => {setCreateIsOpen(true)}}></button>
                    </div>
                    {createIsOpen ? <CreateTechModal setCreateIsOpen={setCreateIsOpen}/> : null}
                    {techs.length === 0 ? 
                        <p>Você não tem nenhuma tech</p> : 

                        <div className={styles.content__ul_post}>
                            <ul>
                                {techs.map((tech) => (
                                    <li key={tech.id}>
                                        <h3>{tech.title}</h3>
                                        <div>
                                            <p>{tech.status}</p>
                                            <div>
                                                <button className={styles.btn__edit} onClick={() => {setEditIsOpen(true)}}></button>
                                                <button className={styles.btn__delete} onClick={() => {removeTech(tech.id, setLoading)}}></button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                    {editIsOpen ? <EditTechModal setEditIsOpen={setEditIsOpen}/> : null}
                </div>
            </main>
        </>
    )
}