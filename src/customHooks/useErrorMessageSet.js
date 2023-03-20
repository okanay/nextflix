import {useEffect, useState} from "react";

export const useErrorMessageSet = (language,code) => {

    const [errorMessage, setErrorMessage] = useState(code)

    useEffect(() => {

        language.map(item => {
            if (item.error.code === code)
            {
                setErrorMessage(item.error.decode)
            }
        })

    }, [language, code])

    return [errorMessage]
}