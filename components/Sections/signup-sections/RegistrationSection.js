import Image from "next/image";
import {useSelector} from "react-redux";
import registerDevices from "../../../public/registerDevices.png"
import {motion as m} from "framer-motion";
import {animationStore} from "../../../framer-motion/animation-store";
import {useRouter} from "next/router";
import {useState} from "react";
import {handlePageChange} from "./Layout/SignUpLayout";
import Link from "next/link";

export const RegistrationSection = () => {

    const language = useSelector(state => state.language.value.signup.registration)

    const router = useRouter()
    const [pageAnimation, setPageAnimation] = useState('pageStatic')

    return <m.section variants={animationStore.pageContainer} initial={'initial'} animate={pageAnimation}
                      id={'registration-section'} className={'max-w-[340px] w-full mx-auto h-full mb-32 tablet:mb-10 mt-20 sm:mt-44'}>
        <div className={'w-full h-full flex flex-col flex-wrap justify-start items-center scale-95 xlPhone:scale-100'}>
            <Image src={registerDevices} alt={"registerDevices"} className={'w-72 pr-4'} priority/>
            <h4 className={'text-xs mt-10'}>{language.p.p1} <b>1</b> {language.p.p2} <b>3</b></h4>
            <h2 className={'text-[32px] font-semibold text-center max-w-screen-smPhone'}>{language.t1}</h2>
            <h3 className={'text-[18px] text-center max-w-[300px] mt-4'}>{language.t2}</h3>
            <Link href={"/signup/regform"} className={'absolute top-0 left-0 scale-0'}></Link>
            <button onClick={() => {handlePageChange(setPageAnimation, router, "/signup/regform")}}
                    className={'w-full text-center mt-6 py-4 bg-skin-theme-600 rounded max-w-screen-lg w-full text-skin-theme-font-900 text-2xl mb-32 tablet:mb-0'}>{language.b1}</button>
        </div>
    </m.section>
}

