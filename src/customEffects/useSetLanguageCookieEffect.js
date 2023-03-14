import {useEffect} from "react";
import {useCookies} from "react-cookie";
export const useSetLanguageCookieEffect = (setLanguageBtn) => {

    const [language, setLanguage] = useCookies(['language']);

    useEffect(() => {

        setLanguageBtn({selectedValue : language.language, state : false})

    }, [language])

}