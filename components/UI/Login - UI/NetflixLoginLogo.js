import Link from "next/link";
import Image from "next/image";
import Netflix from "../../../public/netflix.png";

export const NetflixLoginLogo = () => {

    return (
        <Link href={'/'}>
            <Image src={Netflix} alt={"Netflix Logo"} priority className={'w-44 mx-4 py-4 tablet:py-5 tablet:mx-12'}/>
        </Link>
    )
}