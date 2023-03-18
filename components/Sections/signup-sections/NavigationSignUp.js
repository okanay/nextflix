import Image from "next/image";
import Link from "next/link";
import Netflix from "../../../public/netflix.png";
import {useDispatch, useSelector} from "react-redux";
import {resetSignUp} from "../../../src/redux/slicer/SignUp/SignUpSlicer";
import {useRouter} from "next/router";


export const NavigationSignUp = () => {

    const signupData = useSelector(state => state.signup.value)
    const language = useSelector(state => state.language.value.signup.common.navigation)

    const router = useRouter()
    const dispatch = useDispatch()
    const handleLogout = () => {

        router.push("/").then(() => {
            dispatch(resetSignUp())
        })
    }


    return (<nav className={'shadow-sm shadow-skin-theme-body-400/40 w-full'}>
        <div className={'flex flex-row justify-between items-center mx-4 py-4 tablet:py-5 tablet:mx-12'}>
            <Link href={'/'}>
                <Image src={Netflix} alt={"Netflix Logo"} priority className={'w-44'}/>
            </Link>
            {signupData.plan !== "" ?
                (<button type={"button"} onClick={handleLogout}
                         className={'text-xl font-semibold'}>{language.logout}</button>)
                : (
                    <Link href={'/login'} className={'text-xl font-semibold'}>{language.signIn}</Link>
                )
            }
        </div>
    </nav>)
}