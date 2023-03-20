import {useSetLocalStorageSignUpData} from "../../../src/customEffects/useSetLocalStorageSignUpData";
import {MainLayoutHead} from "../../Heads/mainLayoutHead";
import {useSession} from "next-auth/react";
import {useCheckTokenExpire} from "../../../src/customHooks/useCheckTokenExpire";

export const Layout = ({children}) => {

    const {data : session, status} = useSession()
    useSetLocalStorageSignUpData()


    return status === "loading" ?
        (
            <div className={'w-full h-[100vh] flex flex-col justify-start pt-80 items-center bg-black'}>
                <div className={'flex flex-row items-center justify-center gap-4 w-full h-10'}>
                    <h1 className={'text-4xl text-skin-theme-font-900'}>Loading</h1>
                    <div className={'w-10 h-10 rounded-full bg-gradient-to-tr from-skin-theme-400 to-skin-theme-600 ring-1 ring-white animate-spin'}></div>

                </div>
            </div>
        )
        :
        (
            <>
                <MainLayoutHead/>
                <div className={'bg-black font-roboto'}>
                    {children}
                </div>
            </>
        )

}