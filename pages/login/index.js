import {LoginBackgroundImage} from "../../components/Sections/login-sections/loginBackgroundImage";
import {NetflixLoginLogo} from "../../components/UI/Login - UI/NetflixLoginLogo";
import LoginArea from "../../components/Sections/login-sections/LoginArea";
import {LoginFooter} from "../../components/Sections/login-sections/LoginFooter";

const Login = () => {


    return (<LoginBackgroundImage>
        <NetflixLoginLogo/>
        <LoginArea/>
        <LoginFooter/>
    </LoginBackgroundImage>)
}

export default Login

