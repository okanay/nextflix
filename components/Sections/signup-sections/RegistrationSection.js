import Image from "next/image";
import {useSelector} from "react-redux";
import Link from "next/link";
import registerDevices from "../../../public/registerDevices.png"
import {motion as m} from "framer-motion";
import {animationStore} from "../../../framer-motion/animation-store";

export const RegistrationSection = () => {

    const language = useSelector(state => state.language.value.signup.registration)


    return <m.section id={'registration-section'} className={'max-w-[340px] w-full mx-auto h-full mt-20 sm:mt-44'}>
        <div className={'w-full h-full flex flex-col flex-wrap justify-start items-center scale-95 xlPhone:scale-100'}>
            <Image src={registerDevices} alt={"registerDevices"} className={'w-72 pr-4'} priority/>
            <h4 className={'text-xs mt-10'}>{language.p.p1} <b>1</b> {language.p.p2} <b>3</b></h4>
            <h2 className={'text-[32px] font-semibold text-center max-w-screen-smPhone'}>{language.t1}</h2>
            <h3 className={'text-[18px] text-center max-w-[300px] mt-4'}>{language.t2}</h3>
            <Link href={'/signup/regform'} className={'w-full text-center mt-6 py-4 bg-skin-theme-600 rounded max-w-screen-lg w-full text-skin-theme-font-900 text-2xl mb-32 tablet:mb-0'}>{language.b1}</Link>
        </div>
    </m.section>
}