import {WhiteBackground} from "../../components/Sections/signup-sections/WhiteBackground";
import {NavigationSignIn} from "../../components/Sections/signup-sections/NavigationSignIn";
import {SignUpFooter} from "../../components/Sections/signup-sections/SignUpFooter";
import {PlanComponent} from "../../components/Sections/signup-sections/PlanComponent";

const Plan = () => {

    return (<WhiteBackground>
            <NavigationSignIn/>
            <PlanComponent/>
            <SignUpFooter/>
        </WhiteBackground>
    )
}

export default Plan