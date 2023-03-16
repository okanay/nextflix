import Image from "next/image";
import {useSelector} from "react-redux";
import Link from "next/link";

export const RegistrationSection = () => {

    const language = useSelector(state => state.language.value.signup.registration)


    return <section id={'registration-section'} className={'w-full flex flex-col justify-center items-center max-w-[340px] mx-auto py-[75px] tablet:mb-64'}>
        <div className={'w-full flex flex-col flex-wrap justify-center items-center w-full scale-95 xlPhone:scale-100'}>
            <Image src={"/registerDevices.png"} alt={"tv"} width={500} height={120} className={'w-72 pr-4'} loading={"eager"}/>
            <h4 className={'text-xs mt-10'}>{language.p.p1} <b>1</b> {language.p.p2} <b>3</b></h4>
            <h2 className={'text-[32px] font-semibold text-center max-w-screen-smPhone'}>{language.t1}</h2>
            <h3 className={'text-[18px] text-center max-w-[300px] mt-4'}>{language.t2}</h3>
            <Link href={'/signup/regform'} className={'w-full text-center mt-6 py-4 bg-skin-theme-600 rounded max-w-screen-lg w-full text-skin-theme-font-900 text-2xl mb-32 tablet:mb-0'}>{language.b1}</Link>
        </div>
    </section>
}