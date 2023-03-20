import {useSelector} from "react-redux";
import Link from "next/link";
import {useGetPlanValue} from "../../../src/customHooks/useGetPlanValue";

export const CurrentPlanBox = () => {

    const language = useSelector(state => state.language.value.signup)
    const plan = language.planChoose
    const box = language.common.box

    const [planValue, setPlanValue] = useGetPlanValue()



    return (
        <div className={'w-full py-3 px-3 bg-skin-theme-body-100/60 rounded focus:outline-none border border-skin-theme-body-100 flex flex-row justify-between items-center'}>
            <div className={'flex flex-col justify-between items-start'}>
                <div>
                    <span className={'font-semibold'}>{plan.plans[planValue]?.price}</span>
                    <span>{box.month}</span>
                </div>
                <span className={'text-skin-theme-font-400'}>{plan.plans[planValue]?.plan}</span>
            </div>
            <Link href={'/signup/planchoose'} className={'text-blue-600 font-semibold'}>{box.change}</Link>
        </div>
    )
}