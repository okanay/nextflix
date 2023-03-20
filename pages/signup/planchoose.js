import {SignUpLayout} from "../../components/Sections/signup-sections/Layout/SignUpLayout";
import {NavigationSignUp} from "../../components/Sections/signup-sections/Layout/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/Layout/FooterSignUp";
import {PlanChooseSection} from "../../components/Sections/signup-sections/Protected-Routes/PlanChooseSection";
import {useRouteProtectEffect} from "../../src/customEffects/useRouteProtectEffect";
import {getSession} from "next-auth/react";

const Plan = ({status}) => {

    useRouteProtectEffect(status)

    return (<SignUpLayout>
            <PlanChooseSection/>
        </SignUpLayout>
    )
}

export default Plan

export async function getServerSideProps(context) {

    let session = await getSession(context.res)

    if (await session !== null)
    {
        return {
            props: {session : session, status : "authenticated"},
        }
    }
    else
    {
        return {
            props: {session : "", status : "unauthenticated"},
        }
    }


}
