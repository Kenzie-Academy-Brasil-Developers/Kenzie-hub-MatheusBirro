import { Link } from "react-router-dom"

export const DashboardPage = () =>{
    return (
        <>
            <header>Kenzie Hub</header>
            <Link to="/">Sair</Link>
            <main>
                <div>
                    <h2>Olá, Samuel Leão</h2>
                    <p>{`Primeiro módulo (Introdução ao Frontend)`}</p>
                </div>
                <div>
                    <h3>{`Que pena! Estamos em desenvolvimento :(`}</h3>
                    <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>
            </main>
        </>
    )
}