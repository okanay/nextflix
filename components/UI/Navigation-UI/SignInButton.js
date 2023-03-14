import {useSelector} from "react-redux";

export const SignInButton = () => {

    const language = useSelector(state => state.language.value.navigation)

    return (<button
        className={'bg-skin-theme-600 rounded px-4 py-[0.345rem] font-semibold text-skin-theme-font-900'}>{language.signIn}
    </button> )
}