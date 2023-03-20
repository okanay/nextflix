import {ChevronRightIcon, HeartIcon, TvIcon} from "@heroicons/react/20/solid";
import {useDispatch, useSelector} from "react-redux";
import {useRef, useState} from "react";
import {useRouter} from "next/router";
import {emailChange, resetSignUp} from "../../../src/redux/slicer/SignUp/SignUpSlicer";
import {FirebaseGetUserData, FirebaseUserExistCheck, FirebaseUserPlanSet} from "../../../firebase/functions";
import {signOut, useSession} from "next-auth/react";
import {useGetAccessToken} from "../../../src/customHooks/useGetAccessToken";

export const GetStartedBtn = () => {
    const {data: session, status} = useSession()
    const router = useRouter()
    const dispatch = useDispatch()
    const language = useSelector(state => state.language.value.index.section1)
    const emailRef = useRef(null)
    const [email, setEmail] = useState("")
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (status === "unauthenticated") {
            if (!emailRef.current.value) {
                emailRef.current.focus();
            } else {
                const response = await FirebaseUserExistCheck(email)
                dispatch(emailChange(email))

                if (response.ok === false) {
                    await router.push("/signup/registration")
                } else {
                    await router.push("/signup/password")
                }
            }
        } else {
            if (status === "authenticated") {
                await router.push("/signup/plan")
            } else {
                await router.push("/signup/paymentpicker")
            }
        }
    }


    return status !== "authenticated" ?

        // Eğer Oturum Yoksa Burası Gösterilir
        <>
            <h4 className={'text-base md:text-xl font-semibold text-center px-2 tablet:px-0'}>{language.t3}</h4>
            <form className={'flex flex-row flex-wrap gap-2 justify-center items-center'} onSubmit={handleSubmit}>
            <div className={'relative peer'}>
                <input type="email"
                       ref={emailRef}
                       onChange={() => {
                           setEmail(emailRef.current.value)
                       }}
                       inputMode={'email'}
                       value={email}
                       id={'email-get-started'}
                       className={`w-[18rem] xlPhone:w-[22rem] h-14 bg-transparent bg-skin-theme-body-1000/10 transition duration-500 
                               border-skin-theme-body-400
                               border rounded px-3 peer placeholder:text-transparent focus:outline-none`}
                       placeholder={"."}/>
                <label htmlFor="email-get-started"
                       className={`absolute text-gray-300/60 transition-all duration-300
                        top-1 left-3 text-[0.6rem] peer-placeholder-shown:text-gray-300/80
                        peer-placeholder-shown:top-4 peer-placeholder-shown:left-3.5 peer-placeholder-shown:text-base`}>
                    {language.i1}
                </label>
            </div>
            <button
                className={'md:my-0 flex flex-row justify-center items-center px-4 py-2 bg-skin-theme-600 rounded'}
                type={"submit"}>
                    <span className={'ml-3 text-2xl font-bold'}>
                        {language.btn1}
                    </span>
                <ChevronRightIcon className={'w-10 h-10'}/>
            </button>
        </form>
        </>

            :

        session.user.name.planID >= 0 ?
        (
            // Eğer oturum açıksa ve kullanıcının planID değeri 1 ' 2 ' 3 ya da daha yüksek bir değerde ise Watch Now butonu gösterilir
            <div className={'flex flex-row flex-wrap gap-2 justify-center items-center'}>
                <button
                    className={'md:my-0 flex flex-row justify-center items-center px-4 py-2 bg-skin-theme-600 rounded gap-2'}
                    type={"submit"}>
                    <span className={'text-2xl font-bold'}>
                        {language.btn4}
                    </span>
                <TvIcon className={'w-6 h-6'}/>
            </button>
            </div>
        )
            :
        (
            // Eğer oturum açıksa ve kullanıcının planID değeri 0'dan küçükse yani daha önce bir tercihte bulunmadıysa Finish Sign Up butonu gösterilir.
            <form className={'flex flex-row flex-wrap gap-2 justify-center items-center'} onSubmit={handleSubmit}>
                <button
                    className={'md:my-0 flex flex-row justify-center items-center px-4 py-2 bg-skin-theme-600 rounded'}
                    type={"submit"}>
                    <span className={'ml-3 text-2xl font-bold'}>
                        {language.btn2}
                    </span>
                    <ChevronRightIcon className={'w-10 h-10'}/>
                </button>
            </form>
        )

}