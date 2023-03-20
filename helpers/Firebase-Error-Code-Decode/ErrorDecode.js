import {useSelector} from "react-redux";

export const ErrorDecode = ({code}) => {

    const language = useSelector(state => state.language.value.error)

    switch (code) {

        case "auth/email-already-in-use":
            return (
                <span className={'w-full text-center text-skin-theme-600'}>
                {language.code1.decode}
                </span>
            )

        case "auth/wrong-password":
            return (
                <span className={'w-full text-center text-skin-theme-600'}>
                {language.code2.decode}
                </span>
            )

        case "auth/internal-error":
            return (
                <span className={'w-full text-center text-skin-theme-600'}>
                {language.code3.decode}
                </span>
            )

        case "auth/user-not-found":
            return (
                <span className={'w-full text-center text-skin-theme-600'}>
                {language.code4.decode}
                </span>
            )

        case "auth/too-many-requests":
            return (
                <span className={'w-full text-center text-skin-theme-600'}>
                {language.code5.decode}
                </span>
            )

        case "auth/weak-password":
            return (
                <span className={'w-full text-center text-skin-theme-600'}>
                {language.code6.decode}
                </span>
            )

        default:
            return (
                <span className={'w-full text-center text-skin-theme-600'}>
                {code}
                </span>
            )
    }
}