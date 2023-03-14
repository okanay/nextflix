import {Navigation} from "./navigation";
import {useCookies} from "react-cookie";

export const Layout = ({children}) => {



    return <div className={''}>
        <Navigation/>
        {children}
    </div>
}