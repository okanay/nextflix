import {CheckSVG} from "./CheckSVG";

export const PlanRules = ({language}) => {

    return (
        <ul className={'flex flex-col justify-between items-start mb-[20px] mt-[15px] text-left p-0'}>
            {language.rules.map(rule =>
            {
                return (
                    <li key={rule.l} className={'flex flex-row justify-start items-start mt-[20px] m-[0px]'}>
                        <CheckSVG color={'text-skin-theme-600'}/>
                        <span className={'text-[18px] ml-[10px]'}>{rule.l}</span>
                    </li>
                )
            })}
        </ul>
    )
}