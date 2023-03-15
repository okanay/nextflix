import {NavigationSignIn} from "../../components/Sections/signin-sections/NavigationSignIn";
import {SignInFooter} from "../../components/Sections/signin-sections/SignInFooter";
import {RegistrationSection} from "../../components/Sections/signin-sections/Registration";
import {WhiteBackground} from "../../components/Sections/signin-sections/WhiteBackground";

const Registration = () => {

    return (<WhiteBackground>
            <NavigationSignIn/>
            <RegistrationSection/>
            <SignInFooter/>
        </WhiteBackground>
    )
}

export default Registration