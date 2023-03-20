import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useSelector} from "react-redux";

export const useGetAccessToken = () => {

    const { data : session, status} = useSession()
    const [accessToken, setToken] = useState("initial")
    const user = useSelector(state => state.user.value)

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