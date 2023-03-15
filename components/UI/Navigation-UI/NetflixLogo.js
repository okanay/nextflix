import Image from "next/image";
import Link from "next/link";

export const NetflixLogo = () => {

    return (<Link href={"/"}>
        <Image src={"/netflix.png"} alt={""} width={904} height={276} priority={true} className={`scale:50 xlPhone:scale-100 tablet:scale-150 text-red-600 my-[1.85rem] w-24 h-8`}/>
    </Link>)
}