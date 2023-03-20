import {useRouter} from "next/router";
import {useEffect} from "react";

export const usePlanIDProtectEffect = (session, status) => {

    const router = useRouter()

    useEffect(() => {

        if (status === "authenticated")
        {
            if(session.user.name.planID >= 0)
            {
                router.push("/")
            }
        }

    }, [session,status])
}