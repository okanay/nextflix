import Image from "next/image";

export const OfflineWatch =  ({language}) => {

        return (<section id={'offline-watch'}  className={'bg-skin-theme-body-1000 pt-8 pb-16 xlPhone:py-24'}>
        <div className={'flex flex-row flex-wrap-reverse justify-center items-center gap-4 xlPhone:gap-16 xlPhone:gap-4'}>
            <div className={'bg-skin-theme-body-1000 flex flex-col items-center justify-center relative'}>
                <Image src={"/mobile.jpg"} alt={"tv"} width={700} height={640} loading={"lazy"}/>
                <div
                    className={'absolute bottom-12 w-48 h-12 basePhone:w-64 basePhone:h-16 lgPhone:w-96 lgPhone:h-24 bg-skin-theme-body-1000 rounded-lg border border-skin-theme-body-400 flex flex-row items-center justify-between px-3'}>
                    <div className={'flex flex-row justify-start items-center gap-2'}>
                        <Image src={"/boxshot.png"} alt={"stranger things"} width={50} height={100} priority={true}
                               className={'scale-35 scale-50 lgPhone:scale-100'}/>
                        <div
                            className={'flex flex-col justify-start text-[0.6rem] basePhone:text-xs lgPhone:text-base'}>
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