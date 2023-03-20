import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import {useDispatch} from "react-redux";
import {resetSignUp} from "../../../src/redux/slicer/SignUp/SignUpSlicer";

export const SignButton = ({language}) => {

    const {data : session, status} = useSession()
    const dispatch = useDispatch()

    const handleSignOut = () => {
        signOut({callbackUrl : "/"}).then(() =>
        {
            dispatch(resetSignUp())
        }).catch(() => {})
    }

    return status === "unauthenticated" ?
        (
            <Link href={'/login'} className={'text-xl font-semibold'}>
                {language.signIn}
            </Link>
        )
        :
        (
            <button type={"button"} onClick={handleSignOut} className={'text-xl font-semibold'}>
                {language.logout}
            </button>
        )
}