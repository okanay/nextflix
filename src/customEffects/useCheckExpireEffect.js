import {useEffect} from "react";
import {FirebaseGetUserData} from "../../firebase/functions";
import {signOut} from "next-auth/react";

export const useCheckExpireEffect = (session, status) => {

    useEffect(() => {
        if (status === "authenticated") {
            FirebaseGetUserData(session?.user.name.accessToken).then(response => {
                if (response.uid === undefined) {
                    signOut({callbackUrl : "/login"})
                }
            })
        }
    }, [])
}