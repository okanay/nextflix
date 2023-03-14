import {useSelector} from "react-redux";
import Image from "next/image";

export const WatchTV = () => {

    const language = useSelector(state => state.language.value.index.section2)


    return (<section id={'watch-on-tv'} className={'bg-skin-theme-body-1000 py-24'}>
        <div className={'flex flex-row flex-wrap justify-center items-center gap-16 xlPhone:gap-24'}>
            <div className={'text-skin-theme-font-900 px-8 tablet:px-4'}>
                <h1 className={'text-3xl xlPhone:text-5xl tablet:text-6xl max-w-2xl font-semibold'}>{language.t1}</h1>
                <h3 className={'text-sm xlPhone:text-2xl tablet:text-xl font-semibold max-w-2xl mt-4'}>{language.t2}</h3>
            </div>
            <div className={'relative flex flex-row justify-center'}>
                <video autoPlay loop muted className={`
                        w-[17rem] h-[17rem] top-0
                        basePhone:w-[19rem] basePhone:h-[19rem] 
                        lgPhone:w-[21.5rem] lgPhone:h-[21.5rem]
                        xlPhone:w-[24rem] xlPhone:h-[24rem] top-0
                        absolute`}>
                    <source
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                        type="video/mp4"/>

                </video>

                <div className={'relative z-20'}>
                    <Image src={"/tv.png"} alt={"tv"} width={540} height={540} priority={true} className={''}/>
                </div>

            </div>
        </div>
    </section>)
}