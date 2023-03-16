import Image from "next/image";

export const WatchTVImage = ({language}) => {

    return (<div className={'relative flex flex-row justify-center'}>
            <div className={`
                        w-[20rem] h-[20rem]
                        basePhone:w-[24.5rem] basePhone:h-[22rem] 
                        xlPhone:w-[26rem] xlPhone:h-[24rem] 
                        sm:w-[40rem] sm:h-[34rem] 
                        tablet:w-[44rem] tablet:h-[36rem] 
                        relative flex flex-row justify-center`}>
                <Image src={"/tv.png"} alt={"tv"} width={720} height={720} className={'z-20'} loading={"eager"}/>
                <video autoPlay loop muted playsInline className={`
                        w-[15rem] h-[15rem] top-5
                        basePhone:w-[17.5rem] basePhone:h-[17.5rem] basePhone:top-5
                        xlPhone:w-[22rem] xlPhone:h-[22rem] xlPhone:top-0
                        sm:w-[28rem] sm:h-[28rem] sm:top-10
                        tablet:w-[31.5rem] tablet:h-[31.5rem] tablet:top-0
                        absolute z-0`}>
                    <source
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                        type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}