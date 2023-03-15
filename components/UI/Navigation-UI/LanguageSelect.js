import {ArrowSmallDownIcon, ArrowSmallRightIcon, GlobeAltIcon} from "@heroicons/react/20/solid";
import {useState} from "react";
import {useSelector} from "react-redux";
import {useLanguageEffect} from "../../../src/customEffects/useLanguageEffect";
import {useSetLanguageCookieEffect} from "../../../src/customEffects/useSetLanguageCookieEffect";

export const LanguageSelect = ({rotation, theme}) => {

    const language = useSelector(state => state.language.value.navigation)
    const [languageBtn, setLanguageBtn] = useState({selectedValue : "initial", state : false})
    useLanguageEffect(languageBtn)
    useSetLanguageCookieEffect(setLanguageBtn)

    return (
        <div
            onClick={() => {setLanguageBtn(prevState => {return {selectedValue: prevState.selectedValue, state: !prevState.state}})}}
            className={`flex flex-row justify-center gap-1 tablet:gap-2 ${theme === "light" ? "text-skin-theme-font-400" : "text-skin-theme-font-900"} items-center px-2 py-0.5 tablet:py-1 border border-skin-theme-body-400 rounded-sm relative transition-all duration-300 hover:scale-105`}>
            <GlobeAltIcon className={'w-4 h-4 tablet:w-5 tablet:h-5'}/>
            <span>{languageBtn.selectedValue === "tr" ? language.trLan : language.engLan}</span>
            {rotation === "down" ? (
                <ArrowSmallDownIcon className={'w-5 h-5 tablet:w-5 tablet:h-5'}/>
            ) : (
                <ArrowSmallRightIcon className={'w-5 h-5 tablet:w-5 tablet:h-5'}/>
            )}
            {languageBtn.state && (
                <div
                    onMouseLeave={() => {setLanguageBtn(prevState => {return {selectedValue: prevState.selectedValue, state: false}})}}
                    className={`absolute ${rotation === "down" ? "top-7 tablet:top-9" : "-top-[0.18rem] left-[7.05rem] tablet:-top-0.5 tablet:left-[7.9rem]"} w-24 tablet:w-28 ${theme === "light" ? "bg-skin-theme-body-200/50" : "bg-skin-theme-body-1000/20"} border border-skin-theme-body-600 rounded-sm flex flex-col items-start justify-start px-4 py-2 gap-1`}>
                    <button className={'hover:text-skin-theme-600'} type={"button"} onClick={() => {setLanguageBtn(prevState => {return {selectedValue: "tr", state: true}})}}>{language.trLan}</button>
                    <button className={'hover:text-skin-theme-600'} type={"button"} onClick={() => {setLanguageBtn(prevState => {return {selectedValue: "eng", state: true}})}}>{language.engLan}</button>
                </div>
            )}
        </div>
    )
}