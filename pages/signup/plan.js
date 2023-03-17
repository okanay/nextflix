import {WhiteBackground} from "../../components/Sections/signup-sections/WhiteBackground";
import {NavigationSignUp} from "../../components/Sections/signup-sections/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/FooterSignUp";
import {PlanSection} from "../../components/Sections/signup-sections/PlanSection";

const Plan = () => {

    return (<WhiteBackground>
            <NavigationSignUp/>
            <PlanSection/>
            <FooterSignUp/>
        </WhiteBackground>
    )
}

export default Plan