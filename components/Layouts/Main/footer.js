import {useSelector} from "react-redux";
import {LanguageSelect} from "../../UI/Navigation-UI/LanguageSelect";

export const Footer = () => {

    const language = useSelector(state => state.language.value.footer)
    return (<footer className={'bg-skin-theme-body-1000 py-24 text-skin-theme-font-900 px-8 text-[0.85rem] basePhone:text-[0.9rem]'}>
        <div className={'max-w-[1300px] mx-auto text-skin-theme-font-700 flex flex-col justify-start items-start w-full'}>
            <h5 className={''}>{language.t1.p1} <span>{language.n1}</span> {language.t1.p2}</h5>

            <div className={'w-full lgPhone:flex lgPhone:flex-row lgPhone:justify-between my-8 lgPhone:flex-wrap lgPhone:gap-12 underline'}>
                <div className={'flex flex-col justify-start items-start gap-1'}>
                    <p>{language.links[0].n}</p>
                    <p>{language.links[1].n}</p>
                    <p>{language.links[2].n}</p>
                    <p>{language.links[3].n}</p>
                    <p>{language.links[4].n}</p>
                </div>

                <div className={'flex flex-col justify-start items-start gap-1'}>
                    <p>{language.links[5].n}</p>
                    <p>{language.links[6].n}</p>
                    <p>{language.links[7].n}</p>
                    <p>{language.links[8].n}</p>
                </div>

                <div className={'flex flex-col justify-start items-start gap-1'}>
                    <p>{language.links[9].n}</p>
                    <p>{language.links[10].n}</p>
                    <p>{language.links[11].n}</p>
                    <p>{language.links[12].n}</p>
                </div>

                <div className={'flex flex-col justify-start items-start gap-1'}>
                    <p>{language.links[13].n}</p>
                    <p>{language.links[14].n}</p>
                    <p>{language.links[15].n}</p>
                    <p>{language.links[16].n}</p>
                </div>
            </div>
            <LanguageSelect/>
            <h5 className={'text-[0.95rem] mt-8'}>{language.t2}</h5>

        </div>
    </footer>)
}