import Link from "next/link";
import Image from "next/image";

export const NetflixLoginLogo = () => {

    return (
        <Link href={'/'}>
            <Image src={'/netflix.png'} alt={'netflix'} width={904} height={276} className={'w-44 mx-4 py-4 tablet:py-5 tablet:mx-12'} loading={'eager'}/>
        </Link>
    )
}