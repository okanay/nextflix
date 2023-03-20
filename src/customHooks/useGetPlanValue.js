import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export const useGetPlanValue = () => {

    const signupData = useSelector(state => state.signup.value)
    const [planValue, setPlanValue] = useState(signupData.plan !== "" ? signupData.plan : 0 )
    const [planName, setPlanName] = useState("Standart")

    useEffect(() => {
        setPlanValue(signupData.plan)
    }, [signupData])

    useEffect(() => {

        if (planValue === 0)
        {
            setPlanName("Basic")
        }
        else if (planValue === 1)
        {
            setPlanName("Standart")
        }
        else if (planValue === 2)
        {
            setPlanName("Premium")
        }


    }, [planValue])

    return [planValue, setPlanValue, planName]
}