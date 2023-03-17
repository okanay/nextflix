import {WhiteBackground} from "../../components/Sections/signup-sections/WhiteBackground";
import {NavigationSignUp} from "../../components/Sections/signup-sections/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/FooterSignUp";
import {PlanChooseSection} from "../../components/Sections/signup-sections/PlanChooseSection";

const Plan = () => {

    return (<WhiteBackground>
            <NavigationSignUp/>
            <PlanChooseSection/>
            <FooterSignUp/>
        </WhiteBackground>
    )
}

export default Plan