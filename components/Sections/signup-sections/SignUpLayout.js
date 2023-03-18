import {NavigationSignUp} from "./NavigationSignUp";
import {FooterSignUp} from "./FooterSignUp";
import {useRouter} from "next/router";
import {AnimatePresence, motion as m} from "framer-motion";
import {useEffect, useState} from "react";

export const SignUpLayout = ({children}) => {

    return (
        <div className={'w-full sm:h-[100vh] bg-skin-theme-body-50 flex flex-col justify-between'}>
            <NavigationSignUp/>
                <AnimatePresence mode={"wait"}>
                       <m.div initial={{opacity : 0, x: -35}} animate={{opacity : 1, x : 0}} transition={{duration : 0.50, delay : 0.15}} className={'w-full sm:h-[100vh]'}>
                           {children}
                       </m.div>
                </AnimatePresence>
            <FooterSignUp/>
        </div>

    );
};


export const LoadingRouter = ({children}) => {

    const router = useRouter()
    const path = router.pathname
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const handleStart = (url) => (url !== router.pathname) && setLoading(true)
        const handleComplete = (url) => (url === router.pathname) && setTimeout(() => {
            setLoading(false)
        }, 5000)

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {

            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)

        }

    }, [])

    return loading ? <><p>Loading..</p></> : (<div className={'w-full h-full'}>
        {children}
    </div>)
}