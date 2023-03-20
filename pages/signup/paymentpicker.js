import {SignUpLayout} from "../../components/Sections/signup-sections/Layout/SignUpLayout";
import {NavigationSignUp} from "../../components/Sections/signup-sections/Layout/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/Layout/FooterSignUp";
import {PaymentPickerSection} from "../../components/Sections/signup-sections/Protected-Routes/PaymentPickerSection";
import {getSession} from "next-auth/react";
import {useRouteProtectEffect} from "../../src/customEffects/useRouteProtectEffect";
import {usePlanIDProtectEffect} from "../../src/customEffects/usePlanIDProtectEffect";

const PaymentPicker = ({data,status}) => {

    useRouteProtectEffect(status)
    usePlanIDProtectEffect(data,status)


    return (<SignUpLayout>
            {status === "authenticated" && (
                <PaymentPickerSection/>
            )}
        </SignUpLayout>
    )
}

export default PaymentPicker

export async function getServerSideProps(context) {

    let session = await getSession(context.res)

    if (await session !== null)
    {
        return {
            props: {data : session, status : "authenticated"},
        }
    }
    else
    {
        return {
            props: {data : "", status : "unauthenticated"},
        }
    }


}
