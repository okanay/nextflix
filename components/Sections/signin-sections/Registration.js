import Image from "next/image";
import {useSelector} from "react-redux";

export const RegistrationSection = () => {

    const language = useSelector(state => state.language.value.signup.registration)


    return <section id={'registration-section'} className={'scale-90 basePhone:scale-100 w-full flex flex-col justify-center items-center tablet:mb-72 my-20'}>
        <div className={'max-w-screen-lg flex flex-col flex-wrap justify-center items-center'}>
            <Image src={"/registerDevices.png"} alt={"tv"} width={500} height={120} className={'w-72'} loading={"eager"}/>
            <h4 className={'text-xs mt-10'}>{language.p.p1} <b>1</b> {language.p.p2} <b>3</b></h4>
            <h2 className={'text-4xl font-semibold text-center max-w-screen-smPhone'}>{language.t1}</h2>
            <h3 className={'text-[1.10rem] text-center max-w-[275px] mt-4'}>{language.t2}</h3>
            <button className={'mt-6 py-4 bg-skin-theme-600 rounded max-w-screen-lg w-full text-skin-theme-font-900 text-2xl'}>{language.b1}</button>
        </div>
    </section>
}