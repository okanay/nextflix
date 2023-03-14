import {ChevronRightIcon} from "@heroicons/react/20/solid";
import {useSelector} from "react-redux";

export const GetStarted = () => {
    const language = useSelector(state => state.language.value.index.section1)

    return (
        <div className={'flex flex-row flex-wrap gap-2 justify-center items-center'}>
            <div className={'relative peer'}>
                <input type="text"
                       id={'email-get-started'}
                       className={'w-[18rem] xlPhone:w-[22rem] h-14 bg-transparent bg-skin-theme-body-1000/10 border border-skin-theme-body-400 rounded px-3 peer placeholder:text-transparent focus:outline-none'}
                       placeholder={"."}/>
                <label htmlFor="email-get-started"
                       className={`absolute text-gray-300/40 transition-all duration-300
                        top-1 left-3 text-[0.6rem] peer-placeholder-shown:text-gray-300/80
                        peer-placeholder-shown:top-4 peer-placeholder-shown:left-3.5 peer-placeholder-shown:text-base` }>{language.i1}</label>
            </div>
            <button type={"button"}
                    className={'my-2 md:my-0 flex flex-row justify-center items-center px-4 py-2 bg-skin-theme-600 rounded'}>
                <span className={'ml-3 text-2xl font-bold'}>{language.btn1}</span>
                <ChevronRightIcon className={'w-10 h-10'}/></button>
        </div>
    )
}