import Image from "next/image";

export const WhereEverYouWant = ({language}) => {

    return (<section id={'where-ever-you-want-watch'} className={'bg-skin-theme-body-1000 pt-16 pb-4 xlPhone:py-24'}>
        <div className={'flex flex-row flex-wrap justify-center items-center gap-4 xlPhone:gap-16'}>
            <div className={'text-skin-theme-font-900 px-8 tablet:px-4 text-center xlPhone:text-start'}>
                <h1 className={'text-3xl lgPhone:text-4xl tablet:text-5xl max-w-2xl font-semibold'}>{language.t1}</h1>

                <h3 className={'text-base lgPhone:text-xl tablet:text-2xl font-semibold max-w-2xl mt-4'}>{language.t2}</h3>
            </div>
            <div className="relative bg-black flex flex-row items-center justify-center">
                <div className={`
                        w-[20rem] h-[20rem]
                        basePhone:w-[24.5rem] basePhone:h-[22rem] 
                        xlPhone:w-[26rem] xlPhone:h-[24rem] 
                        sm:w-[40rem] sm:h-[34rem] 
                        tablet:w-[44rem] tablet:h-[36rem] 
                        relative flex flex-row justify-center`}>
                    <Image src={"/devices.png"} className={'z-10 scale-80 tablet:scale-100'} alt={"tv"} width={720} loading={"lazy"}
                           height={720}/>
                    <video autoPlay loop muted className={`
                        w-[10rem] h-[10rem] top-10
                        basePhone:w-[12.5rem] basePhone:h-[12.5rem] basePhone:top-10
                        xlPhone:w-[13rem] xlPhone:h-[13rem] lgPhone:top-10
                        sm:w-[20rem] sm:h-[20rem] sm:top-10
                        tablet:w-[26rem] tablet:h-[26rem] tablet:top-0
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


