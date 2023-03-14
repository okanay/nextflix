import {Netflix} from "../../UI/NetflixSVG";
import {ArrowSmallDownIcon, GlobeAltIcon} from "@heroicons/react/20/solid";
import Image from "next/image";
import {useEffect, useState} from "react";
import {useLanguageEffect} from "../../../src/customEffects/useLanguageEffect";
import {useSelector} from "react-redux";
import {useSetLanguageCookieEffect} from "../../../src/customEffects/useSetLanguageCookieEffect";

export const Navigation = ({lan}) => {

    const [languageBtn, setLanguageBtn] = useState({selectedValue : "initial", state : false})
    const language = useSelector(state => state.language.value.navigation)
    useLanguageEffect(languageBtn)
    useSetLanguageCookieEffect(setLanguageBtn, lan)



    return (<div className={'relative'}>
        <div className={'h-[600px] absolute w-full'}>
        <Image src={'/index-section-1-image.jpg'} width={2545} height={600} alt={'netflix contents'}
               className={'w-full scale-135 h-full object-cover object-contain'}/>
        </div>
        <div className={'mx-auto w-full max-w-screen-desktop'}>
            <div
                className={'absolute top-0 flex flex-row justify-between items-center max-w-screen-desktop w-full px-4 xlPhone:px-8 tablet:px-16 desktop:px-[1.9rem] absolute z-20'}>
                <Netflix/>
                <div
                    className={'flex justify-end gap-6 items-center text-xs tablet:text-sm cursor-pointer'}>
                    <div
                        onClick={() => {setLanguageBtn(prevState => {return {selectedValue: prevState.selectedValue, state: !prevState.state}})}}
                        className={'flex flex-row justify-center gap-2 text-skin-theme-font-900 items-center px-2 py-[0.345rem] border border-skin-theme-body-600 rounded relative transition-all duration-300 hover:scale-105'}>
                        <GlobeAltIcon className={'w-5 h-5'}/>
                        <span>{languageBtn.selectedValue === "tr" ? language.trLan : language.engLan}</span>
                        <ArrowSmallDownIcon className={'w-5 h-5 '}/>
                        {languageBtn.state && (
                            <div
                                onMouseLeave={() => {setLanguageBtn(prevState => {return {selectedValue: prevState.selectedValue, state: false}})}}
                                className={'absolute top-10 w-28 bg-transparent border border-skin-theme-body-600 rounded flex flex-col items-start justify-start px-4 py-2 gap-1'}>
                                <button type={"button"} onClick={() => {setLanguageBtn(prevState => {return {selectedValue: "tr", state: true}})}}>{language.trLan}</button>
                                <button type={"button"} onClick={() => {setLanguageBtn(prevState => {return {selectedValue: "eng", state: true}})}}>{language.engLan}</button>
                            </div>
                        )}
                    </div>
                    <button
                        className={'bg-skin-theme-600 rounded px-4 py-[0.345rem] font-semibold text-skin-theme-font-900'}>{language.signIn}
                    </button>
                </div>
            </div>
        </div>
    </div>)
}