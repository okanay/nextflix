import {WhiteBackground} from "../../components/Sections/signup-sections/WhiteBackground";
import {NavigationSignIn} from "../../components/Sections/signup-sections/NavigationSignIn";
import {SignUpFooter} from "../../components/Sections/signup-sections/SignUpFooter";
import {PlanChooseSection} from "../../components/Sections/signup-sections/PlanChooseSection";

const Plan = () => {

    return (<WhiteBackground>
            <NavigationSignIn/>
            <PlanChooseSection/>
            <SignUpFooter/>
        </WhiteBackground>
    )
}

export default Plan