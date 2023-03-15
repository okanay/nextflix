import Image from "next/image";

export const OfflineWatch = ({language}) => {

    return (<section id={'offline-watch'} className={'bg-skin-theme-body-1000 pt-8 pb-16 xlPhone:py-24'}>
        <div
            className={'flex flex-row flex-wrap-reverse justify-center items-center gap-4 xlPhone:gap-16 xlPhone:gap-4'}>
            <div className={'bg-skin-theme-body-1000 flex flex-col items-center justify-center relative'}>
                <Image src={"/mobile.jpg"} alt={"tv"} width={700} height={640} loading={"lazy"} className={`
                        w-[18rem] h-[14rem]
                        basePhone:w-[20rem] basePhone:h-[16rem] 
                        xlPhone:w-[24rem] xlPhone:h-[20rem] 
                        sm:w-[26rem] sm:h-[22rem] 
                        tablet:w-[36rem] tablet:h-[30rem] `}/>
                <div
                    className={`absolute
                        w-[12rem] h-[3rem] bottom-6
                        basePhone:w-[14rem] basePhone:h-[4rem] basePhone:bottom-6
                        xlPhone:w-[14rem] xlPhone:h-[4rem] xlPhone:bottom-6
                        sm:w-[14rem] sm:h-[4rem] sm:bottom-6
                        tablet:w-[20rem] tablet:h-[5rem] tablet:bottom-12
                     bg-skin-theme-body-1000 rounded-lg border border-skin-theme-body-400 flex flex-row items-center justify-between px-3`}>
                    <div className={'flex flex-row justify-start items-center gap-2'}>
                        <Image src={"/boxshot.png"} alt={"stranger things"} width={50} height={100} priority={true}
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
            </div>
            <div className={'text-skin-theme-font-900 px-8 tablet:px-4 text-center xlPhone:text-start'}>
                <h1 className={'text-3xl lgPhone:text-4xl tablet:text-5xl max-w-2xl font-semibold'}>{language.t1}</h1>
                <h3 className={'text-base lgPhone:text-xl tablet:text-2xl font-semibold max-w-2xl mt-4'}>{language.t2}</h3>
            </div>
        </div>
    </section>)
}