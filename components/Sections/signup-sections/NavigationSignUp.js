import Image from "next/image";
import Link from "next/link";
import Netflix from "../../../public/netflix.png";


export const NavigationSignUp = () => {

    return (<nav className={'shadow-sm shadow-skin-theme-body-400/40 w-full'}>
        <div className={'flex flex-row justify-between items-center mx-4 py-4 tablet:py-5 tablet:mx-12'}>
        <Link href={'/'}>
            <Image src={Netflix} alt={"Netflix Logo"} priority className={'w-44'}/>
        </Link>
        <Link href={'/login'} className={'text-xl font-semibold'}>Sign In</Link>
        </div>
    </nav>)
}
