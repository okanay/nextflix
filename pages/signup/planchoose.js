import {SignUpLayout} from "../../components/Sections/signup-sections/Layout/SignUpLayout";
import {NavigationSignUp} from "../../components/Sections/signup-sections/Layout/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/Layout/FooterSignUp";
import {PlanChooseSection} from "../../components/Sections/signup-sections/Protected-Routes/PlanChooseSection";
import {useRouteProtectEffect} from "../../src/customEffects/useRouteProtectEffect";
import {getSession} from "next-auth/react";
import {usePlanIDProtectEffect} from "../../src/customEffects/usePlanIDProtectEffect";
import {PaymentPickerSection} from "../../components/Sections/signup-sections/Protected-Routes/PaymentPickerSection";

const Plan = ({data, status}) => {

    useRouteProtectEffect(status)
    usePlanIDProtectEffect(data,status)


    return (<SignUpLayout>
            {status === "authenticated" && (
                <PlanChooseSection/>
            )}
        </SignUpLayout>
    )
}

export default Plan

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
