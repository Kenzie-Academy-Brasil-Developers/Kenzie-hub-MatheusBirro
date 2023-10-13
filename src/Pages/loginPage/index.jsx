import { LoginForm } from "../../Components/Forms/loginForm"
import { DefaultPage } from "../../Components/defaultPage/inde"

export const LoginPage = ({userProfile, setUserProfile}) =>{
    return (
        <>
            <DefaultPage>
                <h2>Login</h2>
                <LoginForm userProfile={userProfile} setUserProfile={setUserProfile}/>
            </DefaultPage>
        </>
    )
}