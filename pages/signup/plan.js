import {SignUpLayout} from "../../components/Sections/signup-sections/Layout/SignUpLayout";
import {NavigationSignUp} from "../../components/Sections/signup-sections/Layout/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/Layout/FooterSignUp";
import {PlanSection} from "../../components/Sections/signup-sections/Protected-Routes/PlanSection";
import {getSession} from "next-auth/react";
import {useRouteProtectEffect} from "../../src/customEffects/useRouteProtectEffect";

const Plan = ({status}) => {

    useRouteProtectEffect(status)


    return (<SignUpLayout>
            <PlanSection/>
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
