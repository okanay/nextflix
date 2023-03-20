import {NetflixLogo} from "../../UI/Navigation-UI/NetflixLogo";
import {LanguageSelect} from "../../UI/Navigation-UI/LanguageSelect";
import {SignButton} from "../../UI/Navigation-UI/SignButton";
import {useSession} from "next-auth/react";

export const IndexNavigation = () => {

    const {data : session, status} = useSession()

    return (<nav className={'relative'}>
        <div className={'mx-auto w-full max-w-screen-desktop'}>
            <div className={'flex flex-row justify-between items-center max-w-screen-desktop w-full px-3 xlPhone:pl-8 tablet:pl-16 desktop:pl-[4.2rem] absolute z-20 -top-1 '}>
                <NetflixLogo/>
                <div className={'flex justify-end gap-2 tablet:gap-5 items-center text-xs tablet:text-sm cursor-pointer'}>
                    <LanguageSelect rotation={'down'} theme={'dark'}/>
                    <SignButton/>
                </div>
            </div>
        </div>
    </nav>)
}