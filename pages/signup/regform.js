import {NavigationSignIn} from "../../components/Sections/signin-sections/NavigationSignIn";
import {SignInFooter} from "../../components/Sections/signin-sections/SignInFooter";
import {RegistrationSection} from "../../components/Sections/signin-sections/RegistrationSection";
import {WhiteBackground} from "../../components/Sections/signin-sections/WhiteBackground";
import {RegformSection} from "../../components/Sections/signin-sections/RegformSection";

const Regform = () => {

    return (<WhiteBackground>
            <NavigationSignIn/>
            <RegformSection/>
            <SignInFooter/>
        </WhiteBackground>
    )
}

export default Regform