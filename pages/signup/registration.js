import {NavigationSignUp} from "../../components/Sections/signup-sections/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/FooterSignUp";
import {RegistrationSection} from "../../components/Sections/signup-sections/RegistrationSection";
import {WhiteBackground} from "../../components/Sections/signup-sections/WhiteBackground";

const Registration = () => {

    return (<WhiteBackground>
            <NavigationSignUp/>
            <RegistrationSection/>
            <FooterSignUp/>
        </WhiteBackground>
    )
}

export default Registration