
import {useSetLocalStorageSignUpData} from "../../../src/customEffects/useSetLocalStorageSignUpData";

export const Layout = ({children}) => {

    useSetLocalStorageSignUpData()

    return <div className={'bg-black'}>
        {children}
    </div>
}