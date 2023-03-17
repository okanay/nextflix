import {NavigationSignIn} from "../../components/Sections/signup-sections/NavigationSignIn";
import {SignUpFooter} from "../../components/Sections/signup-sections/SignUpFooter";
import {RegistrationSection} from "../../components/Sections/signup-sections/RegistrationSection";
import {WhiteBackground} from "../../components/Sections/signup-sections/WhiteBackground";

const Registration = () => {

    return (<WhiteBackground>
            <NavigationSignIn/>
            <RegistrationSection/>
            <SignUpFooter/>
        </WhiteBackground>
    )
}

export default Registration