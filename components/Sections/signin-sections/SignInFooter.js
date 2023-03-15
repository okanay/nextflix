import {useSelector} from "react-redux";
import {LanguageSelect} from "../../UI/Navigation-UI/LanguageSelect";
export const SignInFooter = () => {

    const language = useSelector(state => state.language.value.footer)

    return (<footer className={'bg-skin-theme-body-100 text-skin-theme-font-50 text-[0.85rem] basePhone:text-[0.9rem] shadow-sm shadow-skin-theme-body-800 w-full'}>
        <div className={'max-w-[1300px] pt-8 pb-12 px-12 text-skin-theme-font-600 flex flex-col justify-start items-start w-full '}>
            <h5 className={''}>{language.t1.p1} <span className={'underline'}>{language.n1}</span> {language.t1.p2}</h5>

            <div className={'my-8 w-full underline flex flex-col text-start items-start justify-start content-start text-xs text-skin-theme-font-600'}>
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

            <LanguageSelect rotation={'right'} theme={'light'}/>

        </div>
    </footer>)
}