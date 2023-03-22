import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useErrorMessageSet} from "../../src/customHooks/useErrorMessageSet";

export const ErrorDecode = ({code}) => {

    const language = useSelector(state => state.language.value.errors)
    const errorMessage = useErrorMessageSet(language,code)

    return (
        <span className={'w-full text-center text-skin-theme-600'}>
                {errorMessage}
                </span>
    )
}
