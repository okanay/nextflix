import {useSelector} from "react-redux";
import {LanguageSelect} from "../../UI/Navigation-UI/LanguageSelect";

export const IndexFooter = () => {

    const language = useSelector(state => state.language.value.footer)

    return (<footer
        className={'bg-skin-theme-body-1000  text-skin-theme-font-900 py-12 xlPhone:py-16 px-8 text-[0.85rem] basePhone:text-[0.9rem]'}>
        <div
            className={'max-w-[1300px] mx-auto text-skin-theme-font-700 flex flex-col justify-start items-start w-full'}>
            <h5 className={''}>{language.t1.p1} <span className={'underline'}>{language.n1}</span> {language.t1.p2}</h5>

            <div
                className={'w-full my-8 gap-1 underline flex flex-col text-center items-center justify-center content-center'}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-start w-full">
                    <div className="">
                        <p>{language.links[0].n}</p>
                        <p>{language.links[1].n}</p>
                        <p>{language.links[2].n}</p>
                        <p>{language.links[3].n}</p>
                    </div>
                    <div className="">
                        <p>{language.links[5].n}</p>
                        <p>{language.links[6].n}</p>
                        <p>{language.links[7].n}</p>
                        <p>{language.links[8].n}</p>
                    </div>
                    <div className="">
                        <p>{language.links[9].n}</p>
                        <p>{language.links[10].n}</p>
                        <p>{language.links[11].n}</p>
                        <p>{language.links[12].n}</p>
                    </div>
                    <div className="">
                        <p>{language.links[13].n}</p>
                        <p>{language.links[14].n}</p>
                        <p>{language.links[15].n}</p>
                        <p>{language.links[16].n}</p>
                    </div>
                    <div className="">
                        <p>{language.links[4].n}</p>
                    </div>
                </div>
            </div>

            <LanguageSelect rotation={'right'}/>
            <h5 className={'text-[0.95rem] mt-8'}>{language.t2}</h5>

        </div>
    </footer>)
}