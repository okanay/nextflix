import Image from "next/image";
import Link from "next/link";
import Netflix from "../../../public/netflix.png";
import {useSelector} from "react-redux";
import {SignButton} from "../../UI/SignUp-UI/SignButton";


export const NavigationSignUp = () => {

    const language = useSelector(state => state.language.value.signup.common.navigation)


    return (<nav className={'shadow-sm shadow-skin-theme-body-400/40 w-full'}>
        <div className={'flex flex-row justify-between items-center mx-4 py-4 tablet:py-5 tablet:mx-12'}>
            <Link href={'/'}>
                <Image src={Netflix} alt={"Netflix Logo"} priority className={'w-44'}/>
            </Link>
            <SignButton language={language}/>
        </div>
    </nav>)
}