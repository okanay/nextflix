import Image from "next/image";

export const NetflixLogo = () => {

    return (<>
        <Image src={"/netflix.png"} alt={""} width={904} height={276} priority={true} className={'scale-101 xlPhone:scale-100 tablet:scale-150 text-red-600 my-[1.85rem] w-28 h-10'}/>
    </>)
}