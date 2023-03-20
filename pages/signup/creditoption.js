import {SignUpLayout} from "../../components/Sections/signup-sections/Layout/SignUpLayout";
import {NavigationSignUp} from "../../components/Sections/signup-sections/Layout/NavigationSignUp";
import {FooterSignUp} from "../../components/Sections/signup-sections/Layout/FooterSignUp";
import {CreditOptionSection} from "../../components/Sections/signup-sections/Protected-Routes/CreditOptionSection";
import {getSession, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {useRouteProtectEffect} from "../../src/customEffects/useRouteProtectEffect";
import {usePlanIDProtectEffect} from "../../src/customEffects/usePlanIDProtectEffect";
import {GiftOptionSection} from "../../components/Sections/signup-sections/Protected-Routes/GiftOptionSection";

const CreditOption = ({data, status}) => {

    useRouteProtectEffect(status)
    usePlanIDProtectEffect(data,status)

    return (<SignUpLayout>
            {status === "authenticated" && (
                <CreditOptionSection/>
            )}
        </SignUpLayout>
    )
}

export default CreditOption

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