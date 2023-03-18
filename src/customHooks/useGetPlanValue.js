import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export const useGetPlanValue = () => {

    const signupData = useSelector(state => state.signup.value)
    const [planValue, setPlanValue] = useState(signupData.plan !== "" ? signupData.plan : 0 )

    useEffect(() => {
        setPlanValue(signupData.plan)
    }, [signupData])

    return [planValue, setPlanValue]
}