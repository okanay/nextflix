import {useDispatch, useSelector} from "react-redux";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import {resetSignUp} from "../../../src/redux/slicer/SignUp/SignUpSlicer";
export const SignButton = () => {

    const language = useSelector(state => state.language.value.navigation)
    const {data : session, status} = useSession()
    const dispatch = useDispatch()

    const handleResetSignUp = () => {
        signOut({callbackUrl : "/"}).then(() =>
        {
            dispatch(resetSignUp())
        }).catch(() => {})
    }

    return status === "unauthenticated" ? (
        <Link href={'/login'}
              className={'text-[0.6rem] basePhone:text-xs tablet:text-[0.93rem] bg-skin-theme-600 rounded px-4 py-1.5 tablet:py-2 font-semibold text-skin-theme-font-900'}>{language.signIn}
        </Link>
    ) : (
        <button onClick={handleResetSignUp}
              className={'text-[0.6rem] basePhone:text-xs tablet:text-[0.93rem] bg-skin-theme-600 rounded px-4 py-1.5 tablet:py-2 font-semibold text-skin-theme-font-900'}>{language.signOut}
        </button>
    )
}