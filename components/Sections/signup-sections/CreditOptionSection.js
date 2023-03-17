import {useSelector} from "react-redux";
import Link from "next/link";
import Visa  from "../../../public/visa.png"
import Troy  from "../../../public/troy.png"
import AmericanExpress  from "../../../public/americanexpress.png"
import MasterCard  from "../../../public/mastercard.png"
import Image from "next/image";
export const CreditOptionSection = () => {

    const language = useSelector(state => state.language.value.signup.creditOption)

    return <section id={'credit-option-section'} className={'w-full h-full max-w-[440px] mx-auto my-12'}>
        <div className={'w-full flex flex-col flex-wrap justify-center items-start w-full scale-95 xlPhone:scale-100'}>
            <h4 className={'text-[13px]'}>{language.p.p1} <b>3</b> {language.p.p2} <b>3</b></h4>
            <h2 className={'text-[32px] font-semibold text-start mb-4'}>{language.t1}</h2>
            <div className={'flex flex-row justify-start gap-1 mb-2'}>
                <Image src={Visa} alt={"checkmark"} className={'w-10'} priority/>
                <Image src={MasterCard} alt={"checkmark"} className={'w-10'} priority/>
                <Image src={AmericanExpress} alt={"checkmark"} className={'w-10'} priority/>
                <Image src={Troy} alt={"checkmark"} className={'w-10'} priority/>
            </div>
            <input type="text" className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none mb-2 border border-skin-theme-body-400'}
                   placeholder={language.i1}/>
            <input type="text" className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none mb-2 border border-skin-theme-body-400'}
                   placeholder={language.i2}/>
            <input type="number" className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none mb-2 border border-skin-theme-body-400'}
                   placeholder={language.i3}/>
            <input type="text" className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none mb-2 border border-skin-theme-body-400'}
                   placeholder={language.i4}/>
            <input type="text" className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none mb-2 border border-skin-theme-body-400'}
                   placeholder={language.i5}/>
            <div type="text" className={'w-full py-3 px-3 bg-skin-theme-body-100/60 rounded focus:outline-none border border-skin-theme-body-100 flex flex-row justify-between items-center'}>
                <div className={'flex flex-col justify-between items-start'}>
                    <span className={'font-semibold'}>{language.box.price}{language.box.month}</span>
                    <span className={'text-skin-theme-font-400'}>{language.box.plan}</span>
                </div>
                <span className={'text-blue-600 font-semibold'}>{language.box.change}</span>
            </div>


            <small className={'text-skin-theme-font-700 text-[12px] mt-4'}>{language.t2}</small>
            <small className={'text-skin-theme-font-700 text-[12px] mt-4'}>
                {language.t3.p1} <span className={'text-blue-600 underline'}>{language.t3.p2}</span> <span className={'text-blue-600 underline'}>{language.t3.p3}</span>{language.t3.p4}
            </small>
            <div className={'flex flex-row justify-start gap-1 items-center mt-3 text-skin-theme-font-700 text-[16px]'}>
                <input type="checkbox"/>
                <p>{language.i6}</p>
            </div>

            <Link href={'/signup/paymentpicker'} className={'text-center mt-4 py-4 bg-skin-theme-600 rounded max-w-screen-lg text-skin-theme-font-900 text-2xl tablet:mb-0 w-full'}>{language.b1}</Link>
        </div>
    </section>
}