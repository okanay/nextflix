import {useSelector} from "react-redux";
import Visa  from "../../../../public/visa.png"
import Troy  from "../../../../public/troy.png"
import AmericanExpress  from "../../../../public/americanexpress.png"
import MasterCard  from "../../../../public/mastercard.png"
import Image from "next/image";
import {CurrentPlanBox} from "../../../UI/SignUp-UI/CurrentPlanBox";
import {useGetPlanValue} from "../../../../src/customHooks/useGetPlanValue";
import {PeerInput} from "../../../UI/SignUp-UI/PeerInput";
import {motion as m} from "framer-motion";
import {animationStore} from "../../../../framer-motion/animation-store";
import {useState} from "react";
import {useRouter} from "next/router";
import {handlePageChange} from "../Layout/SignUpLayout";
import Link from "next/link";
import {FirebaseUserPlanSet} from "../../../../firebase/functions";
import {signOut, useSession} from "next-auth/react";

export const CreditOptionSection = () => {

    const {data:session, status} = useSession()
    const language = useSelector(state => state.language.value.signup.creditOption)
    const prices = useSelector(state => state.language.value.signup.planChoose)
    const [planValue, setPlanValue, planName] = useGetPlanValue()

    const router = useRouter()
    const [pageAnimation, setPageAnimation] = useState('pageStatic')

    const StartMembership = async () => {
        if (status === "authenticated")
        {
            let accessToken = session.user.name.accessToken
            let membershipType = "Credit Option"
            await FirebaseUserPlanSet(accessToken, planValue, planName, membershipType).then(res => {
                signOut({callbackUrl : "/login"})
            })
        }
    }


    return <m.section variants={animationStore.pageContainer} initial={'initial'} animate={pageAnimation} id={'credit-option-section'} className={'w-full h-full max-w-[440px] mx-auto my-6'}>
        <div className={'w-full flex flex-col flex-wrap justify-center items-start w-full scale-95 xlPhone:scale-100'}>
            <h4 className={'text-[13px]'}>{language.p.p1} <b>3</b> {language.p.p2} <b>3</b></h4>
            <h2 className={'text-[32px] font-semibold text-start mb-4'}>{language.t1}</h2>
            <div className={'flex flex-row justify-start gap-1 mb-2'}>
                <Image src={Visa} alt={"checkmark"} className={'w-10'} priority/>
                <Image src={MasterCard} alt={"checkmark"} className={'w-10'} priority/>
                <Image src={AmericanExpress} alt={"checkmark"} className={'w-10'} priority/>
                <Image src={Troy} alt={"checkmark"} className={'w-10'} priority/>
            </div>
            <PeerInput defaultValue={"Okan"} placeholder={language.i1} id={"name"}/>
            <PeerInput defaultValue={"Ay"} placeholder={language.i2} id={"surname"}/>
            <PeerInput defaultValue={"5105 | 1051 | 0510 | 5100"} placeholder={language.i3} id={"cardNumber"}/>
            <PeerInput defaultValue={"07/28"} placeholder={language.i4} id={"expirationDate"}/>
            <PeerInput defaultValue={"195"} placeholder={language.i5} id={"CVV"}/>
         <CurrentPlanBox/>


            <small className={'text-skin-theme-font-700 text-[12px] mt-4'}>{language.t2}</small>
            <small className={'text-skin-theme-font-700 text-[12px] mt-4'}>
                <span>{language.t3.p1} </span>
                <span className={'text-blue-600 underline'}>{language.t3.p2}</span>
                <span>, </span>
                <span className={'text-blue-600 underline'}>{language.t3.p3}</span>
                <span>{language.t3.p4}</span>
                <span>{prices?.plans[planValue]?.price}</span>
                <span>{language.t3.p5}</span>
            </small>
            <div className={'flex flex-row justify-start gap-1 items-center mt-3 text-skin-theme-font-700 text-[16px]'}>
                <input type="checkbox"/>
                <p>{language.i6}</p>
            </div>
            <Link href={"/signup/paymentpicker"}  className={'absolute top-0 left-0 scale-0'}></Link>
            <button onClick={StartMembership} className={'text-center mt-4 py-4 bg-skin-theme-600 rounded max-w-screen-lg text-skin-theme-font-900 text-2xl tablet:mb-0 w-full'}>{language.b1}</button>
        </div>
    </m.section>
}