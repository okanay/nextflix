import Image from "next/image";

export const Netflix = () => {

    return (<>
        <Image src={"/netflix.png"} alt={""} width={100} height={100} className={'scale-75 xlPhone:scale-100 tablet:scale-150 text-red-600 my-[1.85rem]'}/>
    </>)
}