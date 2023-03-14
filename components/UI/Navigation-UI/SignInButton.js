import {useSelector} from "react-redux";

export const SignInButton = () => {

    const language = useSelector(state => state.language.value.navigation)

    return (<button
        className={'text-[0.6rem] basePhone:text-xs tablet:text-[0.93rem] bg-skin-theme-600 rounded px-4 py-1.5 tablet:py-2 font-semibold text-skin-theme-font-900'}>{language.signIn}
    </button> )
}