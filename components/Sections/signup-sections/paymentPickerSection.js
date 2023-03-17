import {useSelector} from "react-redux";
import Link from "next/link";
import Image from "next/image";
import lock from "../../../public/Lock.png";
import {LockSVG} from "../../UI/SignUp-UI/LockSVG";
import NetflixGift from "../../../public/netflix-gift.png"
import Visa  from "../../../public/visa.png"
import Troy  from "../../../public/troy.png"
import AmericanExpress  from "../../../public/americanexpress.png"
import MasterCard  from "../../../public/mastercard.png"
import {ArrowRightSVG} from "../../UI/SignUp-UI/ArrowRightSVG";

export const PaymentPickerSection = () => {

    const language = useSelector(state => state.language.value.signup.paymentPicker)


    return (<section id={'payment-picker-section'} className={'max-w-[500px] w-full mx-auto h-full my-12 '}>
        <div className={'w-full h-full flex flex-col flex-wrap justify-start items-center scale-95 xlPhone:scale-100'}>
            <Image src={lock} alt={"checkmark"} className={'w-12'} priority/>
            <h4 className={'text-xs mt-8'}>{language.p.p1} <b>3</b> {language.p.p2} <b>3</b></h4>
            <div className={'space-y-2 max-w-[440px]'}>
                <h2 className={'text-[32px] font-semibold text-center '}>{language.t1}</h2>
                <h3 className={'text-[18px] text-center'}>{language.t2}</h3>
                <div>
                    <h3 className={'text-[18px] font-semibold text-center '}>{language.t3}</h3>
                    <h3 className={'text-[18px] font-semibold text-center '}>{language.t4}</h3>
                </div>
            </div>

            <div className={'w-full flex flex-row justify-end gap-1 items-center mt-6 mb-0.5 px-4 sm:px-0'}>
                <p className={'text-[12px]'}>{language.t5}</p>
                <LockSVG/>
            </div>
            <div className={'w-full px-4 sm:px-0'}>
                <Link href={'/signup/creditoption'} className={'w-full text-start px-4  py-4 bg-transparent border border-skin-theme-body-400 rounded text-skin-theme-font-50 flex flex-row justify-between items-center mb-2'}>
                    <div className={'flex flex-row sm:flex-col justify-between gap-2 items-center'}>
                        <div className={'flex flex-col sm:flex-row justify-start gap-2 items-start'}>
                            <span>{language.b1}</span>
                            <div className={'flex flex-row justify-start gap-2 items-start'}>
                                <Image src={MasterCard} alt={"checkmark"} className={'w-8 basePhone:w-10'} priority/>
                                <Image src={Visa} alt={"checkmark"} className={'w-8 basePhone:w-10'} priority/>
                                <Image src={AmericanExpress} alt={"checkmark"} className={'w-8 basePhone:w-10'} priority/>
                                <Image src={Troy} alt={"checkmark"} className={'w-8 basePhone:w-10'} priority/>
                            </div>
                        </div>
                    </div>
                    <ArrowRightSVG/>
                </Link>
                <Link href={'/signup/giftoption'} className={'w-full text-start px-4  py-4 bg-transparent border border-skin-theme-body-400 rounded text-skin-theme-font-50 flex flex-row justify-between items-center'}>
                    <div className={'flex flex-row sm:flex-col justify-between gap-2 items-center'}>
                        <div className={'flex flex-col sm:flex-row justify-start gap-2 items-start'}>
                            <span>{language.b2}</span>
                            <div className={'flex flex-row justify-start gap-2 items-start'}>
                                <Image src={NetflixGift} alt={"checkmark"} className={'w-8 basePhone:w-10'} priority/>
                            </div>
                        </div>
                    </div>
                    <ArrowRightSVG/>
                </Link>
            </div>
        </div>
    </section>)
}