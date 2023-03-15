import Image from "next/image";
import Link from "next/link";


export const NavigationSignIn = () => {

    return (<nav className={'shadow-sm shadow-skin-theme-body-400/40 w-full'}>
        <div className={'flex flex-row justify-between items-center mx-4 py-4 tablet:py-5 tablet:mx-12'}>
        <Link href={'/'}>
            <Image src={'/netflix.png'} alt={'netflix'} width={904} height={276} className={'w-44'} loading={'eager'}/>
        </Link>
        <Link href={'/login'} className={'text-xl font-semibold'}>Sign In</Link>
        </div>
    </nav>)
}
