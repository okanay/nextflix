import {Navigation} from "./navigation";
import {useCookies} from "react-cookie";
import {Footer} from "./footer";

export const Layout = ({children}) => {



    return <div className={''}>
        <Navigation/>
        {children}
        <Footer/>
    </div>
}