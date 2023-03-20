import Image from "next/image";
import whereImage from "../../../public/devices.png"

export const WhereEverYouWantImage = ({language}) => {

    return (<div className="relative bg-black flex flex-row items-center justify-center">
            <div className={`
                        w-[20rem] h-[20rem]
                        basePhone:w-[24.5rem] basePhone:h-[22rem] 
                        xlPhone:w-[26rem] xlPhone:h-[24rem] 
                        sm:w-[40rem] sm:h-[34rem] 
                        tablet:w-[44rem] tablet:h-[36rem] 
                        relative flex flex-row justify-center`}>
                <Image src={whereImage} className={'z-10 scale-80 tablet:scale-100 w-auto h-auto'} alt={"tv"} priority/>
                <video autoPlay loop muted playsInline className={`
                        w-[10rem] h-[10rem] top-10
                        basePhone:w-[12.5rem] basePhone:h-[12.5rem] basePhone:top-5
                        xlPhone:w-[13rem] xlPhone:h-[13rem] lgPhone:top-10
                        sm:w-[20rem] sm:h-[20rem] sm:top-10
                        tablet:w-[26rem] tablet:h-[26rem] tablet:top-0
                        absolute`}>
                    <source
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                        type="video/mp4"/>
                </video>
            </div>
        </div>)
}