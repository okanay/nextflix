import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {emailChange, planChange} from "../redux/slicer/SignUp/SignUpSlicer";

export const useSignUpDataEffect = (value, change) => {

    const dispatch = useDispatch()

    useEffect(() => {

        switch (change) {
            case "email" :
                dispatch(emailChange(value))
                break
            case "plan" :
                dispatch(planChange(value))
                break
        }

    }, [value])


}