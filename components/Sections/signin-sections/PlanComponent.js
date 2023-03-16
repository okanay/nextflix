import {useSelector} from "react-redux";
import Image from "next/image";
import Link from "next/link";
import {PlanRules} from "../../UI/SignUp-UI/PlanRules";

export const PlanComponent = () => {

    const language = useSelector(state => state.language.value.signup.plan)


    return (<section id={'registration-section'} className={'w-full flex flex-col justify-center items-center max-w-[340px] mx-auto py-[75px] tablet:mb-64'}>
        <div className={'w-full flex flex-col flex-wrap justify-start items-start tablet:justify-center tablet:items-center w-full scale-95 xlPhone:scale-100'}>
            <Image src={"/checkmark.png"} alt={"checkmark"} width={90} height={90} className={'w-12'} loading={"eager"}/>
            <h4 className={'text-xs mt-8'}>{language.p.p1} <b>2</b> {language.p.p2} <b>3</b></h4>
            <h2 className={'text-3xl font-semibold text-center max-w-screen-smPhone'}>{language.t1}</h2>
            <div className={'max-w-[300px]'}>
                <PlanRules language={language}/>
            </div>
            <Link href={'/signup/regform'} className={'w-full text-center mt-6 py-4 bg-skin-theme-600 rounded max-w-screen-lg w-full text-skin-theme-font-900 text-2xl mb-32 tablet:mb-0'}>{language.b1}</Link>
        </div>
    </section>)
}