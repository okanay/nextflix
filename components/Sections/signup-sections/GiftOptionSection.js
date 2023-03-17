import Link from "next/link";
import {useSelector} from "react-redux";


export const GiftOptionSection = () => {

    const language = useSelector(state => state.language.value.signup.giftOption)

    return <section id={'gift-option-section'} className={'w-full h-full max-w-[440px] mx-auto mt-12'}>
        <div className={'w-full flex flex-col flex-wrap justify-center items-start w-full scale-95 xlPhone:scale-100'}>
            <h4 className={'text-[13px]'}>{language.p.p1} <b>3</b> {language.p.p2} <b>3</b></h4>
            <h2 className={'text-[32px] font-semibold text-start mb-4'}>{language.t1}</h2>
            <input type="text" className={'w-full py-5 px-3 bg-skin-theme-body-50 rounded focus:outline-none mb-2 border border-skin-theme-body-400'}
                   placeholder={language.i1}/>
            <div type="text" className={'w-full py-3 px-3 bg-skin-theme-body-100/60 rounded focus:outline-none border border-skin-theme-body-100 flex flex-row justify-between items-center'}>
                <div className={'flex flex-col justify-between items-start'}>
                    <span className={'font-semibold'}>{language.box.price}{language.box.month}</span>
                    <span className={'text-skin-theme-font-400'}>{language.box.plan}</span>
                </div>
                <span className={'text-blue-600 font-semibold'}>{language.box.change}</span>
            </div>
            <Link href={'/signup/paymentpicker'} className={'text-center mt-3 py-4 bg-skin-theme-600 rounded max-w-screen-lg text-skin-theme-font-900 text-2xl mb-32 tablet:mb-0 w-full'}>{language.b1}</Link>
            <small className={'text-skin-theme-font-400 text-[12px] mt-4'}>
                {language.t2.p1}<span className={'text-blue-600 underline'}>{language.t2.p2}</span>
            </small>
        </div>
    </section>
}