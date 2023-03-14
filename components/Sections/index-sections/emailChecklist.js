import {ChevronRightIcon} from "@heroicons/react/20/solid";
import {useSelector} from "react-redux";

export const EmailChecklist = () => {
    const language = useSelector(state => state.language.value.index.section1)

    return (<section id={'email-checklist'} className={'h-[610px]'}>
        <div className={'absolute w-full bg-gradient-to-t from-black via-black/30 to-black h-[610px] flex flex-col justify-center items-center text-skin-theme-font-900'}>
            <div className={'text-center flex flex-col gap-3 pt-24'}>
                <h1 className={'text-4xl md:text-5xl font-bold'}>{language.t1}</h1>
                <h3 className={'text-lg md:text-2xl font-semibold my-3'}>{language.t2}</h3>
                <h4 className={'text-base md:text-xl font-semibold text-center px-24 md:px-0'}>{language.t3}</h4>
                <div className={'flex flex-row flex-wrap gap-2 justify-center items-center'}>
                    <input type="text"
                           className={'w-[22rem]  h-14 bg-transparent bg-skin-theme-body-900/40 border border-skin-theme-body-600 rounded px-3 placeholder:text-gray-300'}
                           placeholder={language.i1}/>
                    <button type={"button"}
                            className={'my-2 md:my-0 flex flex-row justify-center items-center px-4 py-2 bg-skin-theme-600 rounded'}>
                        <span className={'ml-3 text-2xl font-bold'}>{language.btn1}</span>
                        <ChevronRightIcon className={'w-10 h-10'}/></button>
                </div>
            </div>
        </div>
    </section>)
}
