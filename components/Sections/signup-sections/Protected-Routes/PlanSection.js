import {useSelector} from "react-redux";
import Image from "next/image";
import {PlanRules} from "../../../UI/SignUp-UI/PlanRules";
import checkmark from "../../../../public/checkmark.png"
import {motion as m} from "framer-motion";
import {animationStore} from "../../../../framer-motion/animation-store";
import {useRouter} from "next/router";
import {useState} from "react";
import {handlePageChange} from "../Layout/SignUpLayout";
import Link from "next/link";



export const PlanSection = () => {


    const router = useRouter()
    const [pageAnimation, setPageAnimation] = useState('pageStatic')

    const language = useSelector(state => state.language.value.signup.plan)

    return (<m.section variants={animationStore.pageContainer} initial={'initial'} animate={pageAnimation} id={'plan-section'} className={'max-w-[340px] w-full mx-auto h-full mb-32 tablet:mb-10 mt-20 sm:mt-44'}>
        <div className={'w-full h-full flex flex-col flex-wrap justify-start items-center scale-95 xlPhone:scale-100'}>
            <Image src={checkmark} alt={"checkmark"} className={'w-12'} priority/>
            <h4 className={'text-xs mt-8'}>{language.p.p1} <b>2</b> {language.p.p2} <b>3</b></h4>
            <h2 className={'text-3xl font-semibold text-center max-w-screen-smPhone'}>{language.t1}</h2>
            <div className={'max-w-[300px]'}>
                <PlanRules language={language}/>
            </div>
            <Link href={"/signup/planchoose"}  className={'absolute top-0 left-0 scale-0'}></Link>
            <button onClick={() => {handlePageChange(setPageAnimation,router, "/signup/planchoose")}} className={'w-full text-center mt-6 py-4 bg-skin-theme-600 rounded max-w-screen-lg w-full text-skin-theme-font-900 text-2xl'}>{language.b1}</button>
        </div>
    </m.section>)
}

