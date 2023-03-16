import Image from "next/image";
import {useState} from "react";
import offlineImage from "../../../public/mobile.jpg"
import strangerThings from "../../../public/boxshot.png"
export const OfflineWatchImage = ({language}) => {

    const [imageLoading, setImageLoading] = useState(false)


    return (<div className={'bg-skin-theme-body-1000 flex flex-col items-center justify-center relative'}>
        <Image src={offlineImage} alt={"tv"} priority className={`
                        w-[18rem] h-[14rem]
                        basePhone:w-[20rem] basePhone:h-[16rem] 
                        xlPhone:w-[24rem] xlPhone:h-[20rem] 
                        sm:w-[26rem] sm:h-[22rem] 
                        tablet:w-[40rem] tablet:h-[29rem] `}
               onLoadingComplete={() => {setImageLoading(true)}}
        />
        {imageLoading && (
            <div className={`absolute
                        w-[12rem] h-[3rem] bottom-6
                        basePhone:w-[14rem] basePhone:h-[4rem] basePhone:bottom-6
                        xlPhone:w-[14rem] xlPhone:h-[4rem] xlPhone:bottom-6
                        sm:w-[14rem] sm:h-[4rem] sm:bottom-6
                        tablet:w-[22rem] tablet:h-[5.5rem] tablet:bottom-12
                     bg-skin-theme-body-1000 rounded-lg border border-skin-theme-body-400 flex flex-row items-center justify-between px-3`}>
                <div className={'flex flex-row justify-start items-center gap-2'}>
                    <Image src={strangerThings} alt={"strangerThings"} priority
                           className={`
                                w-[1.5rem] h-[2rem] bottom-6
                                basePhone:w-[2rem] basePhone:h-[2.5rem] basePhone:bottom-6
                                xlPhone:w-[2rem] xlPhone:h-[2.5rem] xlPhone:bottom-6
                                sm:w-[2.5rem] sm:h-[3rem] sm:bottom-6
                                tablet:w-[3rem] tablet:h-[3.5rem] tablet:bottom-6
                                `}/>
                    <div
                        className={'flex flex-col justify-start text-[0.6rem] basePhone:text-xs tablet:text-sm'}>
                        <p className={'text-skin-theme-font-900'}>Stranger Things</p>
                        <p className={'text-blue-600'}>{language.p1}.</p>
                    </div>
                </div>
                <div>
                    <img
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                        alt="gif example"
                        className={'w-4 h-4 basePhone:w-6 basePhone:h-6 lgPhone:w-12 lgPhone:h-12'}/>
                </div>
            </div>
        )}
    </div>)
}