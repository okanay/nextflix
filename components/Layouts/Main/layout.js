import {Footer} from "./footer";

export const Layout = ({children}) => {


    return <div className={''}>
        {children}
        <Footer/>
    </div>
}