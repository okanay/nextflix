import {RegistrationSection} from "../../components/Sections/signup-sections/RegistrationSection";
import {SignUpLayout} from "../../components/Sections/signup-sections/Layout/SignUpLayout";
import {useRouter} from "next/router";

const Registration = () => {

    const router = useRouter()

    return (<SignUpLayout>
            <RegistrationSection/>
        </SignUpLayout>
    )
}

export default Registration