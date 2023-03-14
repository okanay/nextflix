import {useSelector} from "react-redux";
import {PlusIcon} from "@heroicons/react/20/solid";
import {GetStartedBtn} from "../../UI/Index-UI/GetStartedBtn";
import {useState} from "react";
import {motion as m} from "framer-motion";
import {animationStore} from "../../../framer-motion/animation-store";

export const FrequentlyQuestions = () => {

    const language = useSelector(state => state.language.value.index.section6)
    const [answers, setAnswers] = useState(
        [
            {open: false},
            {open: false},
            {open: false},
            {open: false},
            {open: false},
            {open: false},
            {open: false},
        ]
    )
    const handleQuestionClick = (id) => {
        let value = answers[id].open
        setAnswers(prevState => {
            return [...prevState, answers[id].open = !value]
        })
    }

    return (<section id={'questions'} className={'bg-skin-theme-body-1000 py-24 text-skin-theme-font-900'}>
        <div className={'flex flex-col justify-center items-center w-full gap-3'}>
            <h1 className={'text-3xl lgPhone:text-4xl tablet:text-5xl font-semibold mb-6'}>{language.t1}</h1>
            <div className={'space-y-4 max-w-[1300px] w-full px-4'}>
                {language.q.map((item, index) => {
                    return <div className={'relative'} key={item.t + `${index}`} onClick={() => {
                        handleQuestionClick(index)
                    }}>
                        <div
                            className={'py-4 bg-skin-theme-body-900 rounded-sm flex flex-col justify-center px-6 cursor-pointer'}>
                            <div className={'flex flex-row justify-between items-center'}>
                                <h1 className={'text-base basePhone:text-lg sm:text-2xl font-semibold'}>{item.t}</h1>
                                <PlusIcon className={'w-6 h-6 basePhone:w-8 basePhone:h-8 laptop:w-12 laptop:h-12 origin-top'}/>
                            </div>
                        </div>
                        <m.div
                            variants={animationStore.answer}
                            animate={answers[index].open ? "open" : "close"}
                            className={`py-4 bg-skin-theme-body-900 rounded-sm flex flex-col justify-center px-6 cursor-pointer my-0.5`}>
                            <h2 className={'text-xs basePhone:text-sm sm:text-lg font-semibold'}>
                                {language.q[index].a}
                            </h2>
                        </m.div>
                    </div>

                })}
            </div>
            <h1 className={'text-sm lgPhone:text-lg tablet:text-xl font-semibold mt-10 mb-2 px-6'}>{language.t2}</h1>
            <GetStartedBtn/>
        </div>
    </section>)
}