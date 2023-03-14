import {NetflixLogo} from "../../UI/Navigation-UI/NetflixLogo";
import {LanguageSelect} from "../../UI/Navigation-UI/LanguageSelect";
import {SignInButton} from "../../UI/Navigation-UI/SignInButton";
import Image from "next/image";
export const Navigation = () => {


    return (<div className={'relative'}>
        <div className={'h-[600px] absolute w-full'}>
            <Image src={'/contents-image.jpg'} width={2545} height={600} alt={'netflix contents'} priority={true}
                   className={'w-full scale-135 h-full object-cover object-contain'}/>
        </div>
        <div className={'mx-auto w-full max-w-screen-desktop'}>
            <div
                className={'absolute top-0 flex flex-row justify-between items-center max-w-screen-desktop w-full px-4 xlPhone:px-8 tablet:px-16 desktop:px-[1.9rem] absolute z-20'}>
                <NetflixLogo/>
                <div className={'flex justify-end gap-6 items-center text-xs tablet:text-sm cursor-pointer'}>
                    <LanguageSelect/>
                    <SignInButton/>
                </div>
            </div>
        </div>
    </div>)
}