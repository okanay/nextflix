import Image from "next/image";
import whereImage from "../../../public/devices.png"

export const WhereEverYouWantImage = ({language}) => {

    return (<div className="relative bg-black flex flex-row items-center justify-center overflow-hidden">
            <div className={`
                        w-[20rem] h-[20rem]
                        basePhone:w-[24.5rem] basePhone:h-[22rem] 
                        xlPhone:w-[30rem] xlPhone:h-[24rem] 
                        sm:w-[36rem] sm:h-[30rem] 
                        tablet:w-[44rem] tablet:h-[36rem] 
                        relative flex flex-row justify-center`}>
                <Image src={whereImage} className={'z-10 w-auto h-auto'} alt={"tv"} priority/>
                <video autoPlay loop muted playsInline className={`
                      
                        hidden smPhone:block
                        w-[13rem] h-[10rem] top-5
                        basePhone:w-[15rem] basePhone:h-[12.5rem] basePhone:top-0
                        xlPhone:w-[18rem] xlPhone:h-[15rem] lgPhone:top-0
                        sm:w-[23rem] sm:h-[20rem] sm:top-0
                        tablet:w-[28rem] tablet:h-[26rem] tablet:-top-8
                        absolute`}>
                    <source
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                        type="video/mp4"/>
                </video>
            </div>
        </div>)
}