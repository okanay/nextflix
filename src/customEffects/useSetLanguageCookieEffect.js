import {useEffect} from "react";
import {useDispatch} from "react-redux";
export const useSetLanguageCookieEffect = (setLanguageBtn, lan) => {

    useEffect(() => {

        setLanguageBtn({selectedValue : lan, state : false})

    }, [lan])

}