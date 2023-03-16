import Image from "next/image";
import Link from "next/link";
import Netflix from "../../../public/netflix.png"
export const NetflixLogo = () => {

    return (<Link href={"/"}>
        <Image src={Netflix} alt={"Netflix Logo"} priority className={`scale:50 xlPhone:scale-100 tablet:scale-150 text-red-600 my-[1.85rem] w-24 h-8`}/>
    </Link>)
}