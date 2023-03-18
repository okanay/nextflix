import Link from "next/link";
import {useSelector} from "react-redux";
import {CurrentPlanBox} from "../../UI/SignUp-UI/CurrentPlanBox";


export const GiftOptionSection = () => {

    const language = useSelector(state => state.language.value.signup.giftOption)

    return <section id={'gift-option-section'} className={'w-full h-full max-w-[440px] mx-auto my-16'}>
        <div className={'w-full flex flex-col flex-wrap justify-center items-start w-full scale-95 xlPhone:scale-100'}>
            <h4 className={'text-[13px]'}>{language.p.p1} <b>3</b> {language.p.p2} <b>3</b></h4>
            <h2 className={'text-[32px] font-semibold text-start mb-4'}>{language.t1}</h2>
            {/* Gift Code Input*/}
            <div className={'relative peer w-full'}>
                <input type="text"
                       id={'giftCode'}
                       disabled
                       defaultValue={"OA-GS-1998"}
                       className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none mb-2 border border-skin-theme-body-400 peer placeholder:text-transparent focus:outline-none'}
                       placeholder={"."}/>
                <label htmlFor="giftCode"
                       className={`absolute text-gray-600/60 transition-all duration-300
                        top-1 left-3 text-[0.6rem] peer-placeholder-shown:text-gray-600/60
                        peer-placeholder-shown:top-4 peer-placeholder-shown:left-3.5 peer-placeholder-shown:text-base`}>{language.i1}</label>
            </div>
            <CurrentPlanBox/>
            <Link href={'/signup/paymentpicker'} className={'text-center mt-3 py-4 bg-skin-theme-600 rounded max-w-screen-lg text-skin-theme-font-900 text-2xl tablet:mb-0 w-full'}>{language.b1}</Link>
            <small className={'text-skin-theme-font-400 text-[12px] mt-4'}>
                {language.t2.p1}<span className={'text-blue-600 underline'}>{language.t2.p2}</span>
            </small>
        </div>
    </section>
}