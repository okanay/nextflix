import {WhiteBackground} from "../../components/Sections/signup-sections/WhiteBackground";
import {NavigationSignUp} from "../../components/Sections/signup-sections/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/FooterSignUp";
import {CreditOptionSection} from "../../components/Sections/signup-sections/CreditOptionSection";

const CreditOption = () => {

    return (<WhiteBackground>
            <NavigationSignUp/>
            <CreditOptionSection/>
            <FooterSignUp/>
        </WhiteBackground>
    )
}

export default CreditOption