import {WhiteBackground} from "../../components/Sections/signup-sections/WhiteBackground";
import {NavigationSignUp} from "../../components/Sections/signup-sections/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/FooterSignUp";
import {PaymentPickerSection} from "../../components/Sections/signup-sections/paymentPickerSection";

const PaymentPicker = () => {

    return (<WhiteBackground>
            <NavigationSignUp/>
            <PaymentPickerSection/>
            <FooterSignUp/>
        </WhiteBackground>
    )
}

export default PaymentPicker