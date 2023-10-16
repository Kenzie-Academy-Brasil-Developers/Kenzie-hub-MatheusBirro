import { LoginForm } from "../../Components/Forms/loginForm"
import { DefaultPage } from "../../Components/defaultPage/inde"

export const LoginPage = () =>{
    return (
        <>
            <DefaultPage>
                <h2>Login</h2>
                <LoginForm/>
            </DefaultPage>
        </>
    )
}