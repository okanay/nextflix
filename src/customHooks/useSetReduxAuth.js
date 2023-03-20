import {useDispatch} from "react-redux";
import {useGetAccessToken} from "./useGetAccessToken";
import {useEffect, useState} from "react";
import {FirebaseGetUserData} from "../../firebase/functions";
import {setUser} from "../redux/slicer/auth/userSlice";
import {useSession} from "next-auth/react";

export const useSetReduxAuth = () => {

    const {data: session, status} = useSession()
    const dispatch = useDispatch()
    const accessToken = useGetAccessToken()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)
        if (accessToken !== "initial" && accessToken !== undefined) {

            FirebaseGetUserData(accessToken).then(user => {
                if (user.accessToken) {
                    let data = {
                        email: user.email,
                        planID: user.planID,
                        planName: user.planName,
                        accessToken: user.accessToken
                    }
                    setLoading(false)
                    dispatch(setUser(data))
                }
                else
                {
                    setLoading(false)
                    console.log("useSetFireStoreUserDataToReduxEffect 2")
                }

            }).catch(err =>
            {
                setLoading(false)
                console.log("useSetFireStoreUserDataToReduxEffect Error")
                console.log(err)
            })
        }

        if (status === "unauthenticated")
        {
            setLoading(false)
        }

        }, [accessToken, status, session])

    return loading
}