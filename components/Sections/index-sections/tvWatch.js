import {useSelector} from "react-redux";
import Image from "next/image";

export const TvWatch = () => {

    const language = useSelector(state => state.language.value.index.section2)


    return (<section id={'tv-watch'} className={'bg-skin-theme-body-1000 py-32'}>
        <div className={'flex flex-row flex-wrap justify-center items-center gap-16 xlPhone:gap-24'}>
                <div className={'text-skin-theme-font-900 px-8 tablet:px-4'}>
                    <h1 className={'text-3xl xlPhone:text-5xl tablet:text-6xl max-w-2xl font-semibold'}>{language.t1}</h1>
                    <h3 className={'text-sm xlPhone:text-lg tablet:text-xl font-semibold max-w-2xl mt-4'}>{language.t2}</h3>
                </div>
                <div className={''}>
                    <Image src={"/tv.png"} alt={"tv"} width={540} height={540} priority={true} />
                </div>
        </div>
    </section>)
}