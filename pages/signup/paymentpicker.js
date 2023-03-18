import {SignUpLayout} from "../../components/Sections/signup-sections/SignUpLayout";
import {NavigationSignUp} from "../../components/Sections/signup-sections/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/FooterSignUp";
import {PaymentPickerSection} from "../../components/Sections/signup-sections/paymentPickerSection";

const PaymentPicker = () => {

    return (<SignUpLayout>
            <PaymentPickerSection/>
        </SignUpLayout>
    )
}

export default PaymentPicker