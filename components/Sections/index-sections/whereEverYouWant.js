import Image from "next/image";
import {useSelector} from "react-redux";

export const WhereEverYouWant = () => {

    const language = useSelector(state => state.language.value.index.section4)


    return (<section id={'where-ever-you-want-watch'} className={'bg-skin-theme-body-1000 py-32'}>
        <div className={'flex flex-row flex-wrap justify-center items-center gap-16 xlPhone:gap-24'}>
            <div className={'text-skin-theme-font-900 px-8 tablet:px-4'}>
                <h1 className={'text-3xl xlPhone:text-4xl tablet:text-5xl max-w-2xl font-semibold'}>{language.t1}</h1>
                <h3 className={'text-sm xlPhone:text-lg tablet:text-xl font-semibold max-w-2xl mt-4'}>{language.t2}</h3>
            </div>
            <div className="hidden smPhone:block relative bg-black flex flex-row items-center justify-center">
                <div className={`
                        w-[20rem] h-[20rem]
                        basePhone:w-[24.5rem] basePhone:h-[22rem] 
                        lgPhone:w-[26rem] lgPhone:h-[24rem] 
                        xlPhone:w-[27rem] xlPhone:h-[25rem] 
                        sm:w-[32rem] sm:h-[26rem] 
                        tablet:w-[36rem] tablet:h-[32rem] 
                        relative flex flex-row justify-center`}>
                    <Image src={"/devices.png"} className={'z-10 scale-80 tablet:scale-100'} alt={"tv"} width={720}
                           height={720} priority={true}/>
                    <video autoPlay loop muted className={`
                        w-[10rem] h-[10rem] top-10
                        basePhone:w-[12.5rem] basePhone:h-[12.5rem] basePhone:top-10
                        lgPhone:w-[13rem] lgPhone:h-[13rem] lgPhone:top-10
                        xlPhone:w-[14rem] xlPhone:h-[14rem] xlPhone:top-10
                        sm:w-[16rem] sm:h-[16rem] sm:top-10
                        tablet:w-[23rem] tablet:h-[23rem] tablet:top-0
                        absolute`}>
                        <source
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                            type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    </section>)
}


