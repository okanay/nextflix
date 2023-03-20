import {useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {useSignUpDataEffect} from "../../../src/customEffects/usePlanChooseEffect";
import {motion as m} from "framer-motion";
import {animationStore} from "../../../framer-motion/animation-store";
import {useRouter} from "next/router";
import {handlePageChange} from "./SignUpLayout";
import Link from "next/link";
import {handleSignIn} from "../../../firebase/functions";
import {ErrorDecode} from "../../../helpers/Firebase-Error-Code-Decode/ErrorDecode";
import {useEmailSignDataEffect} from "../../../src/customEffects/useEmailSignDataEffect";
import {signIn} from "next-auth/react";


export const PasswordSection = () => {

    const passwordRef = useRef()
    const router = useRouter()
    const language = useSelector(state => state.language.value.signup.password)
    const signData = useSelector(state => state.signup.value)

    const [pageAnimation, setPageAnimation] = useState('pageStatic')
    const [email, setEmail] = useState(signData.email)
    const [error, setError] = useState({status: false, code: ""})
    const [password, setPassword] = useState("")
    useEmailSignDataEffect(setEmail,signData, router)
    const handleCreateBtn = async () => {

        const login = await signIn("credentials", {email, password, redirect: false, remember: false});

        if (login.ok)
        {
            handlePageChange(setPageAnimation, router, "/signup/plan")

        }
        else
        {
            setError({status: true, code: login.error})
        }
    }


    return <m.section variants={animationStore.pageContainer} initial={'initial'} animate={pageAnimation}
                      id={'regform-section'}
                      className={'w-full h-full max-w-[440px] mx-auto mt-6 sm:mt-12 mb-32 tablet:mb-10'}>
        <div className={'w-full flex flex-col flex-wrap justify-center items-start w-full scale-95 xlPhone:scale-100'}>
            <h4 className={'text-[13px]'}>{language.p.p1} <b>1</b> {language.p.p2} <b>3</b></h4>
            <h2 className={'text-[32px] font-semibold text-start '}>{language.t1}</h2>
            <h2 className={'text-[32px] font-semibold text-start '}>{language.t2}</h2>
            <h3 className={'text-[18px] text-start mb-4'}>{language.t3}</h3>
            {/*Email Input*/}
            <div className={'mb-4'}>
                <h3>E-mail</h3>
                <h3 className={'font-bold text-skin-theme-font-50'}><b>{email}</b></h3>
            </div>
            {/*Password Input*/}
            <div className={'relative peer w-full'}>
                <input type="password"
                       id={'password'}
                       ref={passwordRef}
                       onChange={() => {
                           setPassword(passwordRef.current.value)
                       }}
                       className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none border border-skin-theme-body-400 peer placeholder:text-transparent focus:outline-none'}
                       placeholder={language.i1}/>
                <label htmlFor="password"
                       className={`absolute text-gray-600/60 transition-all duration-300
                        top-1 left-3 text-[0.6rem] peer-placeholder-shown:text-gray-600/60
                        peer-placeholder-shown:top-4 peer-placeholder-shown:left-3.5 peer-placeholder-shown:text-base`}>{language.i1}</label>
            </div>
            <div className={'flex flex-row justify-start gap-2 items-center my-3'}>
                <p className={'text-[16px] text-blue-500'}>{language.b1}</p>
            </div>
            {error.status && (<ErrorDecode code={error.code} />)}
            <Link href={"/signup/plan"} className={'absolute top-0 left-0 scale-0'}></Link>
            <button onClick={handleCreateBtn}
                    className={'text-center w-full mt-3 py-4 bg-skin-theme-600 rounded max-w-screen-lg text-skin-theme-font-900 text-2xl mb-32 tablet:mb-0'}>{language.b2}</button>

        </div>
    </m.section>
}