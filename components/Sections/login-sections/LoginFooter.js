import {useSelector} from "react-redux";
import {LanguageSelect} from "../../UI/Navigation-UI/LanguageSelect";

export const LoginFooter = () => {

    const language = useSelector(state => state.language.value.footer)

    return (<footer
        className={'tablet:bg-skin-theme-body-1000/70 bg-skin-theme-body-1000 text-skin-theme-font-900 py-8 xlPhone:py-8 tablet:py-16 px-8 text-[0.85rem] basePhone:text-[0.9rem] tablet:mt-48 border-t border-skin-theme-body-500 mt-24'}>
        <div
            className={'max-w-[1300px] mx-auto text-skin-theme-font-600 flex flex-col justify-start items-start w-full'}>
            <h5 className={''}>{language.t1.p1} <span className={'underline'}>{language.n1}</span> {language.t1.p2}</h5>

            <div
                className={'w-full my-8 gap-1 underline flex flex-col text-center items-center justify-center content-end text-xs text-skin-theme-font-600'}>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-start w-full gap-4">
                    <div className="">
                        <p>{language.links[0].n}</p>
                    </div>
                    <div className="">
                        <p>{language.links[9].n}</p>
                    </div>
                    <div className="">
                        <p>{language.links[7].n}</p>
                    </div>
                    <div className="">
                        <p>{language.links[11].n}</p>
                    </div>
                    <div className="">
                        <p>{language.links[15].n}</p>
                    </div>
                    <div className="">
                        <p>{language.links[3].n}</p>
                    </div>
                </div>
            </div>

           <div className={'pb-16'}>
               <LanguageSelect rotation={'right'} theme={'dark'}/>
           </div>
        </div>
    </footer>)
}