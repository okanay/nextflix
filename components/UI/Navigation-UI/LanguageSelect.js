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
    )
}