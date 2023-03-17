import {useSelector} from "react-redux";
import {NavigationSignIn} from "../../components/Sections/signup-sections/NavigationSignIn";
import {SignUpFooter} from "../../components/Sections/signup-sections/SignUpFooter";
import {WhiteBackground} from "../../components/Sections/signup-sections/WhiteBackground";
const SignIn = () => {

    const language = useSelector(state => state.language.value)

    return (<WhiteBackground>
            <NavigationSignIn/>
            <SignUpFooter/>
        </WhiteBackground>
    )
}

export default SignIn