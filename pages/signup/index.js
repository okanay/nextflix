import {useSelector} from "react-redux";
import {NavigationSignUp} from "../../components/Sections/signup-sections/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/FooterSignUp";
import {SignUpLayout} from "../../components/Sections/signup-sections/SignUpLayout";
const SignIn = () => {

    const language = useSelector(state => state.language.value)

    return (<SignUpLayout>
        </SignUpLayout>
    )
}

export default SignIn