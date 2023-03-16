import {useSelector} from "react-redux";
import {NavigationSignIn} from "../../components/Sections/signin-sections/NavigationSignIn";
import {SignInFooter} from "../../components/Sections/signin-sections/SignInFooter";
import {WhiteBackground} from "../../components/Sections/signin-sections/WhiteBackground";
const SignIn = () => {

    const language = useSelector(state => state.language.value)

    return (<WhiteBackground>
            <NavigationSignIn/>
            <SignInFooter/>
        </WhiteBackground>
    )
}

export default SignIn