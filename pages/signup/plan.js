import {WhiteBackground} from "../../components/Sections/signin-sections/WhiteBackground";
import {NavigationSignIn} from "../../components/Sections/signin-sections/NavigationSignIn";
import {SignInFooter} from "../../components/Sections/signin-sections/SignInFooter";
import {PlanComponent} from "../../components/Sections/signin-sections/PlanComponent";

const Plan = () => {

    return (<WhiteBackground>
            <NavigationSignIn/>
            <PlanComponent/>
            <SignInFooter/>
        </WhiteBackground>
    )
}

export default Plan