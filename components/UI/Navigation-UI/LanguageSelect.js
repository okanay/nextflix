import {ArrowSmallDownIcon, GlobeAltIcon} from "@heroicons/react/20/solid";
import {useState} from "react";
import {useSelector} from "react-redux";
import {useLanguageEffect} from "../../../src/customEffects/useLanguageEffect";
import {useSetLanguageCookieEffect} from "../../../src/customEffects/useSetLanguageCookieEffect";

export const LanguageSelect = () => {

    const language = useSelector(state => state.language.value.navigation)
    const [languageBtn, setLanguageBtn] = useState({selectedValue : "initial", state : false})
    useLanguageEffect(languageBtn)
    useSetLanguageCookieEffect(setLanguageBtn)

    return (
        <div
            onClick={() => {setLanguageBtn(prevState => {return {selectedValue: prevState.selectedValue, state: !prevState.state}})}}
            className={'flex flex-row justify-center gap-1 tablet:gap-2 text-skin-theme-font-900 items-center px-2 py-0.5 tablet:py-1 border border-skin-theme-body-400 rounded relative transition-all duration-300 hover:scale-105'}>
            <GlobeAltIcon className={'w-4 h-4 tablet:w-5 tablet:h-5'}/>
            <span>{languageBtn.selectedValue === "tr" ? language.trLan : language.engLan}</span>
            <ArrowSmallDownIcon className={'w-5 h-5 tablet:w-5 tablet:h-5'}/>
            {languageBtn.state && (
                <div
                    onMouseLeave={() => {setLanguageBtn(prevState => {return {selectedValue: prevState.selectedValue, state: false}})}}
                    className={'absolute top-9 w-28 bg-skin-theme-body-1000/20 border border-skin-theme-body-600 rounded flex flex-col items-start justify-start px-4 py-2 gap-1'}>
                    <button className={'hover:text-skin-theme-600'} type={"button"} onClick={() => {setLanguageBtn(prevState => {return {selectedValue: "tr", state: true}})}}>{language.trLan}</button>
                    <button className={'hover:text-skin-theme-600'} type={"button"} onClick={() => {setLanguageBtn(prevState => {return {selectedValue: "eng", state: true}})}}>{language.engLan}</button>
                </div>
            )}
        </div>
    )
}