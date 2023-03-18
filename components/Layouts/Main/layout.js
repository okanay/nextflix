import {useSetLocalStorageSignUpData} from "../../../src/customEffects/useSetLocalStorageSignUpData";
import Head from "next/head";
import {MainLayoutHead} from "../../Heads/mainLayoutHead";

export const Layout = ({children}) => {

    useSetLocalStorageSignUpData()

    return <>
        <MainLayoutHead/>
        <div className={'bg-black font-roboto'}>
            {children}
        </div>
    </>

}