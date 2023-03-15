import {PlusIcon} from "@heroicons/react/20/solid";
import {GetStartedBtn} from "../../UI/Index-UI/GetStartedBtn";
import {useState} from "react";
export const FrequentlyQuestions = ({language}) => {

    const [answers, setAnswers] = useState(questions)
    const handleQuestionClick = (id) => {
        let value = answers[id].open
        setAnswers(prevState => {return [...prevState, answers[id].open = !value]})
    }

    return (<section id={'questions'} className={'bg-skin-theme-body-1000 py-12 xlPhone:py-24 text-skin-theme-font-900'}>
        <div className={'flex flex-col justify-center items-center w-full gap-3'}>
            <h1 className={'text-3xl lgPhone:text-4xl tablet:text-5xl font-semibold mb-6'}>{language.t1}</h1>
            <div className={'space-y-4 max-w-[1300px] w-full px-4'}>
                {language.q.map((item, index) => {
                    return (
                        <div className="" key={item.t + `${index}`} onClick={() => handleQuestionClick(index)}>
                            <div
                                className="py-4 bg-skin-theme-body-900 rounded-sm flex flex-col justify-center px-6 cursor-pointer">
                                <div className="flex flex-row justify-between items-center">
                                    <h1 className="text-base basePhone:text-lg sm:text-2xl font-semibold">{item.t}</h1>
                                    <div className={`transform-all duration-500 ${answers[index].open ?  "rotate-45 " : "rotate-0"}`}>
                                        <PlusIcon className={`w-6 h-6 basePhone:w-8 basePhone:h-8 laptop:w-12 laptop:h-12 origin-top origin-left`}/>
                                    </div>
                                </div>
                            </div>
                            <div className={`bg-skin-theme-body-900 rounded-sm flex flex-col justify-center px-6 cursor-pointer my-0.5 overflow-hidden transition-all duration-700 ${answers[index].open ? "max-h-[500px]" : "max-h-0"}`}>
                                <h2 className="text-xs basePhone:text-sm sm:text-lg font-semibold overflow-hidden py-4">{language.q[index].a}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>
            <h1 className={'text-sm lgPhone:text-lg tablet:text-xl font-semibold mt-10 mb-2 px-6 text-center'}>{language.t2}</h1>
            <GetStartedBtn/>
        </div>
    </section>)
}

export const questions = [
    {open: false},
    {open: false},
    {open: false},
    {open: false},
    {open: false},
    {open: false},
    {open: false},
]
