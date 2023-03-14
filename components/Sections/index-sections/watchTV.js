import {useSelector} from "react-redux";
import Image from "next/image";

export const WatchTV = () => {

    const language = useSelector(state => state.language.value.index.section2)


    return (<section id={'watch-on-tv'} className={'bg-skin-theme-body-1000 py-24'}>
        <div className={'flex flex-row flex-wrap justify-center items-center gap-16 xlPhone:gap-4'}>
            <div className={'text-skin-theme-font-900 px-8 tablet:px-4'}>
                <h1 className={'text-3xl lgPhone:text-5xl tablet:text-6xl max-w-2xl font-semibold'}>{language.t1}</h1>
                <h3 className={'text-base lgPhone:text-xl tablet:text-2xl font-semibold max-w-2xl mt-4'}>{language.t2}</h3>
            </div>
            <div className={'relative flex flex-row justify-center'}>
                <div className={`
                        w-[20rem] h-[20rem]
                        basePhone:w-[24.5rem] basePhone:h-[22rem] 
                        xlPhone:w-[26rem] xlPhone:h-[24rem] 
                        sm:w-[40rem] sm:h-[34rem] 
                        tablet:w-[44rem] tablet:h-[36rem] 
                        relative flex flex-row justify-center`}>
                    <Image src={"/tv.png"} alt={"tv"} width={720} height={720} priority={true} className={'z-20'}/>
                    <video autoPlay loop muted className={`
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
        </div>
    </section>)
}