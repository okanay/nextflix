import {useSelector} from "react-redux";
import Link from "next/link";
import {useRef, useState} from "react";
import {useSignUpDataEffect} from "../../../src/customEffects/usePlanChooseEffect";

export const RegformSection = () => {

    const language = useSelector(state => state.language.value.signup.regform)
    const signData = useSelector(state => state.signup.value)

    const emailRef = useRef()
    const passwordRef = useRef()
    const [email, setEmail] = useState(signData.email)
    const [password, setPassword] = useState(signData.password)

    useSignUpDataEffect(email, "email")
    useSignUpDataEffect(password, "password")


    return <section id={'registration-section'} className={'w-full h-full max-w-[440px] mx-auto mt-6 sm:mt-12'}>
        <div className={'w-full flex flex-col flex-wrap justify-center items-start w-full scale-95 xlPhone:scale-100'}>
            <h4 className={'text-[13px]'}>{language.p.p1} <b>1</b> {language.p.p2} <b>3</b></h4>
            <h2 className={'text-[32px] font-semibold text-start mb-4'}>{language.t1}</h2>
            <h3 className={'text-[18px] text-start mb-2 text-light'}>{language.t2}</h3>
            <h3 className={'text-[18px] text-start mb-4'}>{language.t3}</h3>
            <input type="text" defaultValue={email} ref={emailRef}
                   onChange={() => {setEmail(emailRef.current.value)}}
                   className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none mb-2 border border-skin-theme-body-400'}
                   placeholder={language.i1}/>
            <input type="password" defaultValue={password} ref={passwordRef}
                   onChange={() => {setPassword(passwordRef.current.value)}}
                   className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none border border-skin-theme-body-400'}
                   placeholder={language.i2}/>
            <div className={'flex flex-row justify-start gap-2 items-center my-3'}>
                <input type="checkbox"/>
                <p className={'text-[16px]'}>{language.t4}</p>
            </div>
            <Link href={'/signup/plan'} className={'text-center w-full mt-3 py-4 bg-skin-theme-600 rounded max-w-screen-lg text-skin-theme-font-900 text-2xl mb-32 tablet:mb-0'}>{language.b1}</Link>
        </div>
    </section>
}