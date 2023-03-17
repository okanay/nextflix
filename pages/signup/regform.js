import {NavigationSignUp} from "../../components/Sections/signup-sections/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/FooterSignUp";
import {RegistrationSection} from "../../components/Sections/signup-sections/RegistrationSection";
import {WhiteBackground} from "../../components/Sections/signup-sections/WhiteBackground";
import {RegformSection} from "../../components/Sections/signup-sections/RegformSection";

const Regform = () => {

    return (<WhiteBackground>
            <NavigationSignUp/>
            <RegformSection/>
            <FooterSignUp/>
        </WhiteBackground>
    )
}

export default Regform