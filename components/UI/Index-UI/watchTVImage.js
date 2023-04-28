import Image from "next/image";
import watchImage from "../../../public/tv.png"
export const WatchTVImage = ({language}) => {

    return (<div className={'relative flex flex-row justify-center content-start overflow-hidden'}>
            <div className={`
                        w-[20rem] h-[16rem]
                        basePhone:w-[24.5rem] basePhone:h-[18rem] 
                        xlPhone:w-[26rem] xlPhone:h-[20rem] 
                        sm:w-[40rem] sm:h-[31rem] 
                        tablet:w-[44rem] tablet:h-[31rem] 
                        relative flex flex-row justify-center`}>
                <Image src={watchImage} alt={"tv"} className={'w-auto h-auto z-20'} priority/>
                <video autoPlay loop muted playsInline className={`
                        w-[15rem] h-[22rem] -top-14
                        basePhone:w-[18rem] basePhone:h-[17.5rem] basePhone:top-0
                        xlPhone:w-[19.5rem] xlPhone:h-[22rem] xlPhone:-top-6
                        sm:w-[29rem] sm:h-[36rem] sm:-top-12
                        tablet:w-[29rem] tablet:h-[36rem] tablet:-top-12
                        absolute z-0`}>
                    <source
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                        type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}