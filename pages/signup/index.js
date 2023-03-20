import {useSelector} from "react-redux";
import {NavigationSignUp} from "../../components/Sections/signup-sections/Layout/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/Layout/FooterSignUp";
import {SignUpLayout} from "../../components/Sections/signup-sections/Layout/SignUpLayout";
const SignIn = () => {

    const language = useSelector(state => state.language.value)

    return (<SignUpLayout>
        </SignUpLayout>
    )
}

export default SignIn