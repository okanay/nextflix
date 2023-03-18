import {useSelector} from "react-redux";
import Link from "next/link";
import Visa  from "../../../public/visa.png"
import Troy  from "../../../public/troy.png"
import AmericanExpress  from "../../../public/americanexpress.png"
import MasterCard  from "../../../public/mastercard.png"
import Image from "next/image";
import {CurrentPlanBox} from "../../UI/SignUp-UI/CurrentPlanBox";
import {useGetPlanValue} from "../../../src/customHooks/useGetPlanValue";
export const CreditOptionSection = () => {

    const language = useSelector(state => state.language.value.signup.creditOption)
    const prices = useSelector(state => state.language.value.signup.planChoose)
    const [planValue, setPlanValue] = useGetPlanValue()

    return <section id={'credit-option-section'} className={'w-full h-full max-w-[440px] mx-auto my-6'}>
        <div className={'w-full flex flex-col flex-wrap justify-center items-start w-full scale-95 xlPhone:scale-100'}>
            <h4 className={'text-[13px]'}>{language.p.p1} <b>3</b> {language.p.p2} <b>3</b></h4>
            <h2 className={'text-[32px] font-semibold text-start mb-4'}>{language.t1}</h2>
            <div className={'flex flex-row justify-start gap-1 mb-2'}>
                <Image src={Visa} alt={"checkmark"} className={'w-10'} priority/>
                <Image src={MasterCard} alt={"checkmark"} className={'w-10'} priority/>
                <Image src={AmericanExpress} alt={"checkmark"} className={'w-10'} priority/>
                <Image src={Troy} alt={"checkmark"} className={'w-10'} priority/>
            </div>
            {/*Name Input*/}
            <div className={'relative peer w-full'}>
                <input type="text"
                       id={'name'}
                       disabled defaultValue={"Okan"}
                       className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none mb-2 border border-skin-theme-body-400 peer placeholder:text-transparent focus:outline-none'}
                       placeholder={"."}/>
                <label htmlFor="name"
                       className={`absolute text-gray-600/60 transition-all duration-300
                        top-1 left-3 text-[0.6rem] peer-placeholder-shown:text-gray-600/60
                        peer-placeholder-shown:top-4 peer-placeholder-shown:left-3.5 peer-placeholder-shown:text-base`}>{language.i1}</label>
            </div>
            {/*Surname Input*/}
            <div className={'relative peer w-full'}>
                <input type="text"
                       id={'surname'}
                       disabled
                       defaultValue={"Ay"}
                       className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none mb-2 border border-skin-theme-body-400 peer placeholder:text-transparent focus:outline-none'}
                       placeholder={"."}/>
                <label htmlFor="surname"
                       className={`absolute text-gray-600/60 transition-all duration-300
                        top-1 left-3 text-[0.6rem] peer-placeholder-shown:text-gray-600/60
                        peer-placeholder-shown:top-4 peer-placeholder-shown:left-3.5 peer-placeholder-shown:text-base`}>{language.i2}</label>
            </div>
            {/*Credit Number Input*/}
            <div className={'relative peer w-full'}>
                <input type="text"
                       id={'cardNumber'}
                       disabled
                       defaultValue={"5105 | 1051 | 0510 | 5100"}
                       className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none mb-2 border border-skin-theme-body-400 peer placeholder:text-transparent focus:outline-none'}
                       placeholder={"."}/>
                <label htmlFor="cardNumber"
                       className={`absolute text-gray-600/60 transition-all duration-300
                        top-1 left-3 text-[0.6rem] peer-placeholder-shown:text-gray-600/60
                        peer-placeholder-shown:top-4 peer-placeholder-shown:left-3.5 peer-placeholder-shown:text-base`}>{language.i3}</label>
            </div>
            {/*Expiration Date Input*/}
            <div className={'relative peer w-full'}>
                <input type="text"
                       id={'expirationDate'}
                       disabled
                       defaultValue={"07/28"}
                       className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none mb-2 border border-skin-theme-body-400 peer placeholder:text-transparent focus:outline-none'}
                       placeholder={"."}/>
                <label htmlFor="expirationDate"
                       className={`absolute text-gray-600/60 transition-all duration-300
                        top-1 left-3 text-[0.6rem] peer-placeholder-shown:text-gray-600/60
                        peer-placeholder-shown:top-4 peer-placeholder-shown:left-3.5 peer-placeholder-shown:text-base`}>{language.i4}</label>
            </div>
            {/* CVV Input*/}
            <div className={'relative peer w-full'}>
                <input type="text"
                       id={'CVV'}
                       disabled
                       defaultValue={"195"}
                       className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none mb-2 border border-skin-theme-body-400 peer placeholder:text-transparent focus:outline-none'}
                       placeholder={"."}/>
                <label htmlFor="CVV"
                       className={`absolute text-gray-600/60 transition-all duration-300
                        top-1 left-3 text-[0.6rem] peer-placeholder-shown:text-gray-600/60
                        peer-placeholder-shown:top-4 peer-placeholder-shown:left-3.5 peer-placeholder-shown:text-base`}>{language.i5}</label>
            </div>
         <CurrentPlanBox/>


            <small className={'text-skin-theme-font-700 text-[12px] mt-4'}>{language.t2}</small>
            <small className={'text-skin-theme-font-700 text-[12px] mt-4'}>
                <span>{language.t3.p1} </span>
                <span className={'text-blue-600 underline'}>{language.t3.p2}</span>
                <span>, </span>
                <span className={'text-blue-600 underline'}>{language.t3.p3}</span>
                <span>{language.t3.p4}</span>
                <span>{prices.plans[planValue].price}</span>
                <span>{language.t3.p5}</span>
            </small>
            <div className={'flex flex-row justify-start gap-1 items-center mt-3 text-skin-theme-font-700 text-[16px]'}>
                <input type="checkbox"/>
                <p>{language.i6}</p>
            </div>

            <Link href={'/signup/paymentpicker'} className={'text-center mt-4 py-4 bg-skin-theme-600 rounded max-w-screen-lg text-skin-theme-font-900 text-2xl tablet:mb-0 w-full'}>{language.b1}</Link>
        </div>
    </section>
}