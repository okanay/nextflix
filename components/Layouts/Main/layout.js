import {Navigation} from "./navigation";
import {useCookies} from "react-cookie";

export const Layout = ({children}) => {


    const [language, setLanguage] = useCookies(['language']);

    return <div className={''}>
        <Navigation lan={language.language}/>
        {children}
    </div>
}