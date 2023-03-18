import {useSelector} from "react-redux";
import Link from "next/link";
import {CheckSVG} from "../../UI/SignUp-UI/CheckSVG";
import {useEffect, useState} from "react";
import {useSignUpDataEffect, } from "../../../src/customEffects/usePlanChooseEffect";
export const PlanChooseSection = () => {


    const signupData = useSelector(state => state.signup.value)
    const language = useSelector(state => state.language.value.signup.planChoose)
    const [selected, setSelected] = useState(signupData.plan === "" ? 2 : signupData.plan)

    const textColor = (id) => {return selected === id ? "text-skin-theme-600 " : "cursor-pointer"}
    const boxColor = (id) => {return selected === id ? "bg-skin-theme-600" : "bg-skin-theme-300 cursor-pointer"}
    const selectedEffect = (id) => {return selected === id ? "bg-skin-theme-600" : "hidden"}
    useSignUpDataEffect(selected, "plan")

    return <section id={'registration-section'} className={'max-w-[1080px] w-full h-full mx-auto flex flex-col justify-start items-start text-skin-theme-font-50 py-[28px] px-8 mb-8'}>
        <div className={'flex flex-col flex-wrap scale-95 xlPhone:scale-100 mb-10'}>
            <h4 className={'text-[13px]'}>{language.p.p1} <b>2</b> {language.p.p2} <b>3</b></h4>
            <h1 className={'text-[32px] font-semibold '}>{language.t1}</h1>
            <ul className={'flex flex-col justify-start items-start mt-4 w-full space-y-1.5 text-[18px]'}>
                <li className={'flex flex-row justify-start items-start gap-2 w-full'}>
                    <CheckSVG color={"text-skin-theme-600"}/>
                    <p>{language.rules[0].l}</p>
                </li>
                <li className={'flex flex-row justify-start items-start gap-2 w-full'}>
                    <CheckSVG color={"text-skin-theme-600"}/>
                    <p>{language.rules[1].l}</p>
                </li>
                <li className={'flex flex-row justify-start items-start gap-2 w-full'}>
                    <CheckSVG color={"text-skin-theme-600"}/>
                    <p>{language.rules[2].l}</p>
                </li>
            </ul>
        </div>
        <table className={'max-w-[1080px] sm:max-w-[960px] w-full text-[14px] tablet:text-[16px] text-skin-theme-font-400'}>
            <tbody className={'flex flex-col gap-4'}>
                <tr className={'flex flex-row sm:px-6  h-[85px] sm:h-[100px] laptop:h-[125px] text-skin-theme-font-900 text-center mb-4'}>
                    <td className={'tablet:w-[40%] w-[0%] flex flex-row justify-start'}></td>
                    <td className={'tablet:w-[60%] w-[100%] flex flex-row text-[15px] tablet:text-[18px]'}>
                        <div onClick={() => {setSelected(0)}} className={`w-1/3 h-full ${boxColor(0)} py-[18px] flex flex-col justify-center mx-2 sm:mx-8 z-20 relative items-center`}>
                            <p className={''}>{language.plans[0].plan}</p>
                            <div className={`p-2 xlPhone:p-3 absolute -bottom-1 xlPhone:-bottom-1.5 rotate-45 ${selectedEffect(0)} z-10`}></div>
                        </div>
                        <div onClick={() => {setSelected(1)}} className={`w-1/3 h-full ${boxColor(1)} py-[18px] flex flex-col justify-center mx-2 sm:mx-8 z-20 relative items-center`}>
                            <p className={''}>{language.plans[1].plan}</p>
                            <div className={`p-2 xlPhone:p-3 absolute -bottom-1 xlPhone:-bottom-1.5 rotate-45 ${selectedEffect(1)} z-10`}></div>

                        </div>
                        <div onClick={() => {setSelected(2)}} className={`w-1/3 h-full ${boxColor(2)} py-[18px] flex flex-col justify-center mx-2 sm:mx-8 z-20 relative items-center`}>
                            <p className={''}>{language.plans[2].plan}</p>
                            <div className={`p-2 xlPhone:p-3 absolute -bottom-1 xlPhone:-bottom-1.5 rotate-45 ${selectedEffect(2)} z-10`}></div>

                        </div>
                    </td>
                </tr>
                <tr className={'flex flex-row border-b border-skin-theme-body-400 sm:px-6 h-[41px]'}>
                    <td className={'w-[0%] tablet:w-[40%] hidden tablet:block flex flex-row justify-start'}>{language.description[0].d}</td>
                    <td onClick={() => {setSelected(0)}} className={`w-1/3 tablet:w-[20%] flex flex-row justify-center ${textColor(0)}`}> {language.plans[0].price}</td>
                    <td onClick={() => {setSelected(1)}} className={`w-1/3 tablet:w-[20%] flex flex-row justify-center ${textColor(1)}`}>{language.plans[1].price}</td>
                    <td onClick={() => {setSelected(2)}} className={`w-1/3 tablet:w-[20%] flex flex-row justify-center ${textColor(2)}`}>{language.plans[2].price}</td>
                </tr>
                <tr className={'flex flex-row border-b border-skin-theme-body-400 sm:px-6 h-[41px]'}>
                    <td className={'w-[0%] tablet:w-[40%] hidden tablet:block flex flex-row justify-start'}>{language.description[1].d}</td>
                    <td onClick={() => {setSelected(0)}} className={`w-1/3 tablet:w-[20%] flex flex-row justify-center ${textColor(0)}`}>{language.plans[0].quality}</td>
                    <td onClick={() => {setSelected(1)}} className={`w-1/3 tablet:w-[20%] flex flex-row justify-center ${textColor(1)}`}>{language.plans[1].quality}</td>
                    <td onClick={() => {setSelected(2)}} className={`w-1/3 tablet:w-[20%] flex flex-row justify-center ${textColor(2)}`}>{language.plans[2].quality}</td>
                </tr>
                <tr className={'flex flex-row border-b border-skin-theme-body-400 sm:px-6 h-[41px]'}>
                    <td className={'w-[0%] tablet:w-[40%] hidden tablet:block flex flex-row justify-start'}>{language.description[2].d}</td>
                    <td onClick={() => {setSelected(0)}} className={`w-1/3 tablet:w-[20%] flex flex-row justify-center ${textColor(0)}`}>{language.plans[0].resolution}</td>
                    <td onClick={() => {setSelected(1)}} className={`w-1/3 tablet:w-[20%] flex flex-row justify-center ${textColor(1)}`}>{language.plans[1].resolution}</td>
                    <td onClick={() => {setSelected(2)}} className={`w-1/3 tablet:w-[20%] flex flex-row justify-center ${textColor(2)}`}>{language.plans[2].resolution}</td>
                </tr>
                <tr className={'flex flex-row sm:px-6 h-[41px]'}>
                    <td className={'w-[0%] tablet:w-[40%] hidden tablet:block flex flex-row justify-start'}>{language.description[3].d}</td>
                    <td onClick={() => {setSelected(0)}} className={'w-1/3 tablet:w-[20%] flex flex-row justify-center'}><CheckSVG color={`${textColor(0)}`}/></td>
                    <td onClick={() => {setSelected(1)}} className={'w-1/3 tablet:w-[20%] flex flex-row justify-center'}><CheckSVG color={`${textColor(1)}`}/></td>
                    <td onClick={() => {setSelected(2)}} className={'w-1/3 tablet:w-[20%] flex flex-row justify-center'}><CheckSVG color={`${textColor(2)}`}/></td>
                </tr>
            </tbody>
        </table>
        <small className={'mt-6 px-4 text-skin-theme-font-600'}>
            <span>{language.t2.p1}</span> <span>{language.t2.p2}</span> <span>{language.t2.p3}</span>
        </small>
        <small className={'mt-3 px-4 text-skin-theme-font-600'}>
            <span>{language.t3}</span>
        </small>
        <Link href={'/signup/paymentpicker'} className={'w-10/12 basePhone:w-7/12 sm:w-5/12 mx-auto text-center mt-7 py-4 bg-skin-theme-600 rounded max-w-screen-lg text-skin-theme-font-900 text-2xl'}>{language.b1}</Link>
    </section>
}
