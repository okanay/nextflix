import Link from "next/link";
import Image from "next/image";

export const NetflixLoginLogo = () => {

    return (
        <Link href={'/'}>
            <Image src={'/netflix.png'} alt={'netflix'} width={180} height={160} className={'py-4 mx-6'} loading={'lazy'}/>
        </Link>
    )
}