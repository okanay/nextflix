import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {emailChange, passwordChange, planChange} from "../redux/slicer/SignUp/SignUpSlicer";

export const useSetLocalStorageSignUpData = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem("userData")) || undefined

        if (data !== undefined)
        {
            dispatch(emailChange(data.email === "" ? "" : data.email))
            dispatch(passwordChange(data.password === "" ? "" : data.password))
            dispatch(planChange(data.plan === "" ? "" : data.plan))

        }
    }, [])
}