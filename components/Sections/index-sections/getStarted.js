import {GetStartedBtn} from "../../UI/Index-UI/GetStartedBtn";
import Image from "next/image";
import {useState} from "react";
import contentsImage from "../../../public/contents-image.jpg"


export const GetStarted = ({language}) => {

    const [loadingImage ,setLoadingImage] = useState(false)

    return (<section id={'get-started-with-email'} className={'h-[610px]'}>
        <div className={'h-[600px] absolute w-full'}>
            <Image src={contentsImage} alt={'netflix contents'} priority onLoadingComplete={() => {setLoadingImage(true)}}
                   className={'w-full scale-135 h-full object-cover object-contain'}/>
        </div>
        <div
            className={`absolute w-full ${loadingImage ? imageClass.complete : imageClass.loading}  h-[610px] flex flex-col justify-center items-center text-skin-theme-font-900`}>
            <div className={'text-center flex flex-col gap-3 pt-24 px-4'}>
                <h1 className={'text-4xl md:text-5xl font-bold'}>{language.t1}</h1>
                <h3 className={'text-lg md:text-2xl font-semibold my-3'}>{language.t2}</h3>
                <h4 className={'text-base md:text-xl font-semibold text-center'}>{language.t3}</h4>
                <GetStartedBtn/>
            </div>
        </div>
    </section>)
}

export const imageClass = {loading : "bg-skin-theme-body-1000", complete : "bg-gradient-to-b from-skin-theme-body-1000 via-skin-theme-body-1000/20 to-skin-theme-body-1000"}