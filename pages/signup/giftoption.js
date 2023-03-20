import {SignUpLayout} from "../../components/Sections/signup-sections/Layout/SignUpLayout";
import {NavigationSignUp} from "../../components/Sections/signup-sections/Layout/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/Layout/FooterSignUp";
import {GiftOptionSection} from "../../components/Sections/signup-sections/Protected-Routes/GiftOptionSection";
import {getSession} from "next-auth/react";
import {useRouteProtectEffect} from "../../src/customEffects/useRouteProtectEffect";

const GiftOption = ({status}) => {

    useRouteProtectEffect(status)

    return (<SignUpLayout>
            <GiftOptionSection/>
        </SignUpLayout>
    )
}

export default GiftOption

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
