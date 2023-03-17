import {NavigationSignIn} from "../../components/Sections/signup-sections/NavigationSignIn";
import {SignUpFooter} from "../../components/Sections/signup-sections/SignUpFooter";
import {RegistrationSection} from "../../components/Sections/signup-sections/RegistrationSection";
import {WhiteBackground} from "../../components/Sections/signup-sections/WhiteBackground";
import {RegformSection} from "../../components/Sections/signup-sections/RegformSection";

const Regform = () => {

    return (<WhiteBackground>
            <NavigationSignIn/>
            <RegformSection/>
            <SignUpFooter/>
        </WhiteBackground>
    )
}

export default Regform