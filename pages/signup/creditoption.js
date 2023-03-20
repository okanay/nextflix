import {SignUpLayout} from "../../components/Sections/signup-sections/Layout/SignUpLayout";
import {NavigationSignUp} from "../../components/Sections/signup-sections/Layout/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/Layout/FooterSignUp";
import {CreditOptionSection} from "../../components/Sections/signup-sections/Protected-Routes/CreditOptionSection";
import {getSession, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {useRouteProtectEffect} from "../../src/customEffects/useRouteProtectEffect";

const CreditOption = ({status}) => {

    useRouteProtectEffect(status)

    return (<SignUpLayout>
            <CreditOptionSection/>
        </SignUpLayout>
    )
}

export default CreditOption

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