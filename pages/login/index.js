import {LoginBackgroundImage} from "../../components/Sections/login-sections/loginBackgroundImage";
import {NetflixLoginLogo} from "../../components/UI/Login - UI/NetflixLoginLogo";
import LoginArea from "../../components/Sections/login-sections/LoginArea";
import {LoginFooter} from "../../components/Sections/login-sections/LoginFooter";
import {useSelector} from "react-redux";

const Login = () => {

    const language = useSelector(state => state.language.value.loginArea)


    return (<LoginBackgroundImage>
        <NetflixLoginLogo/>
        <LoginArea language={language}/>
        <LoginFooter/>
    </LoginBackgroundImage>)
}

export default Login

