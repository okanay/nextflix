import {useSelector} from "react-redux";
import {GetStarted} from "../../UI/Index-UI/GetStarted";

export const EmailChecklist = () => {

    const language = useSelector(state => state.language.value.index.section1)

    return (<section id={'email-checklist'} className={'h-[610px]'}>
        <div
            className={'absolute w-full bg-gradient-to-b from-skin-theme-body-1000 via-skin-theme-body-50/20 to-skin-theme-body-1000 h-[610px] flex flex-col justify-center items-center text-skin-theme-font-900'}>
            <div className={'text-center flex flex-col gap-3 pt-24'}>
                <h1 className={'text-4xl md:text-5xl font-bold'}>{language.t1}</h1>
                <h3 className={'text-lg md:text-2xl font-semibold my-3'}>{language.t2}</h3>
                <h4 className={'text-base md:text-xl font-semibold text-center px-24 md:px-0'}>{language.t3}</h4>
                <GetStarted/>
            </div>
        </div>
    </section>)
}
