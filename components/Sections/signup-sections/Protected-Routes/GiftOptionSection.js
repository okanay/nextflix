import {useSelector} from "react-redux";
import {CurrentPlanBox} from "../../../UI/SignUp-UI/CurrentPlanBox";
import {PeerInput} from "../../../UI/SignUp-UI/PeerInput";
import {motion as m} from "framer-motion";
import {animationStore} from "../../../../framer-motion/animation-store";
import {useRouter} from "next/router";
import {useState} from "react";
import {handlePageChange} from "../Layout/SignUpLayout";
import Link from "next/link";
import {FirebaseUserPlanSet} from "../../../../firebase/functions";
import {signOut, useSession} from "next-auth/react";
import {useGetPlanValue} from "../../../../src/customHooks/useGetPlanValue";


export const GiftOptionSection = () => {
    const router = useRouter()
    const language = useSelector(state => state.language.value.signup.giftOption)
    const [pageAnimation, setPageAnimation] = useState('pageStatic')
    const [planValue, setPlanValue, planName] = useGetPlanValue()
    const {data : session, status} = useSession()


    const StartMembership = async () => {
        if (status === "authenticated")
        {
            let accessToken = session.user.name.accessToken
            let membershipType = "Gift Card Option"
            await FirebaseUserPlanSet(accessToken, planValue, planName, membershipType).then(res => {
                signOut({callbackUrl : "/login"})
            })
        }
    }

    return <m.section variants={animationStore.pageContainer}
                      initial={'initial'}
                      animate={pageAnimation}
                      id={'gift-option-section'}
                      className={'w-full h-full max-w-[440px] mx-auto my-16'}>
        <div className={'w-full flex flex-col flex-wrap justify-center items-start w-full scale-95 xlPhone:scale-100'}>
            <h4 className={'text-[13px]'}>{language.p.p1} <b>3</b> {language.p.p2} <b>3</b></h4>
            <h2 className={'text-[32px] font-semibold text-start mb-4'}>{language.t1}</h2>
            <PeerInput defaultValue={"OA-GS-1998"} placeholder={language.i1} id={"giftCode"}/>
            <CurrentPlanBox/>
            <Link href={"/signup/paymentpicker"} className={'absolute top-0 left-0 scale-0'}></Link>
            <button onClick={StartMembership}
                    className={'text-center mt-3 py-4 bg-skin-theme-600 rounded max-w-screen-lg text-skin-theme-font-900 text-2xl tablet:mb-0 w-full'}>{language.b1}</button>
            <small className={'text-skin-theme-font-400 text-[12px] mt-4'}>
                {language.t2.p1}<span className={'text-blue-600 underline'}>{language.t2.p2}</span>
            </small>
        </div>
    </m.section>
}


