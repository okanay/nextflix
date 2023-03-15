import Image from "next/image";
import {useSelector} from "react-redux";

export const RegformSection = () => {

    const language = useSelector(state => state.language.value.signup.regform)


    return <section id={'registration-section'} className={'w-full flex flex-col justify-start items-center mb-12 tablet:mb-96'}>
        <div className={'max-w-screen-xlPhone flex flex-col flex-wrap justify-center items-start w-full scale-95 xlPhone:scale-100'}>
            <h4 className={'text-sm mt-10'}>{language.p.p1} <b>1</b> {language.p.p2} <b>3</b></h4>
            <h2 className={'text-4xl font-semibold text-start mb-4'}>{language.t1}</h2>
            <h3 className={'text-[1.10rem] text-start mb-4'}>{language.t2}</h3>
            <input type="text" className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none mb-2 border border-skin-theme-body-400'}
                   placeholder={language.i1}/>
            <input type="text" className={'w-full py-4 px-3 bg-skin-theme-body-50 rounded focus:outline-none border border-skin-theme-body-400 mb-2'}
                   placeholder={language.i2}/>
            <div className={'flex flex-row justify-start gap-1 items-center'}>
                <input type="checkbox"/>
                <p>{language.t3}</p>
            </div>
            <button className={'mt-6 py-4 bg-skin-theme-600 rounded max-w-screen-lg w-full text-skin-theme-font-900 text-2xl'}>{language.b1}</button>
        </div>
    </section>
}