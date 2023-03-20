import {useRouter} from "next/router";
import {useEffect} from "react";

export const useRouteProtectEffect = (status) => {

    const router = useRouter()

    useEffect(() => {

        if (status === "unauthenticated")
        {
            router.push("/")
        }

    }, [])
}