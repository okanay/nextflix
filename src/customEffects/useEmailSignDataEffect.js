import {useEffect} from "react";

export const useEmailSignDataEffect = (setEmail, signData, router) => {

    useEffect(() => {

        setEmail(signData.email)

        if (signData.email === "")
        {
            router.push('/signup/regform')
        }

    }, [signData])
}