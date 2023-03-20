import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";

export const useGetAccessToken = () => {

    const { data : session, status} = useSession()
    const [accessToken, setToken] = useState("initial")

    useEffect(() => {

        if (status === "authenticated")
        {
            setToken(session.user.name.accessToken)
        }
        if (status === "unauthenticated")
        {
            setToken(undefined)
        }

    }, [session, status])

    return accessToken
}