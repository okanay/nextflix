import {useSelector} from "react-redux";
import {NavigationSignUp} from "../../components/Sections/signup-sections/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/FooterSignUp";
import {WhiteBackground} from "../../components/Sections/signup-sections/WhiteBackground";
const SignIn = () => {

    const language = useSelector(state => state.language.value)

    return (<WhiteBackground>
            <NavigationSignUp/>
            <FooterSignUp/>
        </WhiteBackground>
    )
}

export default SignIn