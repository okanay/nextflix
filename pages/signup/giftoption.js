import {WhiteBackground} from "../../components/Sections/signup-sections/WhiteBackground";
import {NavigationSignUp} from "../../components/Sections/signup-sections/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/FooterSignUp";
import {GiftOptionSection} from "../../components/Sections/signup-sections/GiftOptionSection";

const GiftOption = () => {

    return (<WhiteBackground>
            <NavigationSignUp/>
            <GiftOptionSection/>
            <FooterSignUp/>
        </WhiteBackground>
    )
}

export default GiftOption