import {useEffect} from "react";
import {changeLanguage, defaultLanguage} from "../redux/slicer/languages/languagesSlice";
import {useDispatch} from "react-redux";
import {useCookies} from "react-cookie";

export const useLanguageEffect = (languageBtn) => {

    const [language, setLanguage] = useCookies(['language']);
    const dispatch = useDispatch()

    useEffect(() => {
        if (languageBtn.selectedValue !== "initial")
        {
            let language = languageBtn.selectedValue === "undefined" ? defaultLanguage.code : languageBtn.selectedValue
            dispatch(changeLanguage(language))
            setLanguage('language', language, {path: '/'});
        }
    }, [languageBtn.selectedValue])
}