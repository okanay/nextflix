import {NavigationSignUp} from "./NavigationSignUp";
import {FooterSignUp} from "./FooterSignUp";
import {animationStore} from "../../../framer-motion/animation-store";

export const SignUpLayout = ({children}) => {

    return (
        <div className={'w-full sm:h-[100vh] bg-skin-theme-body-50 flex flex-col justify-between'}>
            <NavigationSignUp/>
            {children}
            <FooterSignUp/>
        </div>

    );
};

export const handlePageChange = (setPageAnimation, router, url) => {
    setPageAnimation('pageChange')
    setTimeout(() => {
        router.push(url)
    }, 425)
}