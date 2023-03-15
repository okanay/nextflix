import {NetflixLogo} from "../../UI/Navigation-UI/NetflixLogo";
import {LanguageSelect} from "../../UI/Navigation-UI/LanguageSelect";
import {SignInButton} from "../../UI/Navigation-UI/SignInButton";
import Image from "next/image";
import {useState} from "react";
export const Navigation = () => {



    return (<nav className={'relative'}>
        <div className={'mx-auto w-full max-w-screen-desktop'}>
            <div
                className={'absolute top-0 flex flex-row justify-between items-center max-w-screen-desktop w-full px-3 xlPhone:pl-8 tablet:pl-16 desktop:pl-[1.9rem] absolute z-20'}>
                <NetflixLogo/>
                <div className={'flex justify-end gap-2 tablet:gap-5 items-center text-xs tablet:text-sm cursor-pointer'}>
                    <LanguageSelect/>
                    <SignInButton/>
                </div>
            </div>
        </div>
    </nav>)
}