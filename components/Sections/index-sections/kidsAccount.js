import Image from "next/image";
import {useSelector} from "react-redux";

export const KidsAccount = () => {

    const language = useSelector(state => state.language.value.index.section5)


    return (<section id={'kids-account'} className={'bg-skin-theme-body-1000 py-24'}>
        <div className={'flex flex-row flex-wrap-reverse     justify-center items-center gap-16 xlPhone:gap-24'}>
            <Image src={"/kids.png"} alt={"kids"} width={700} height={640} priority={true}/>
            <div className={'text-skin-theme-font-900 px-8 tablet:px-4'}>
                <h1 className={'text-2xl lgPhone:text-4xl tablet:text-5xl max-w-2xl font-semibold'}>{language.t1}</h1>
                <h3 className={'text-base lgPhone:text-xl tablet:text-2xl font-semibold max-w-2xl mt-4'}>{language.t2}</h3>
            </div>
        </div>
    </section>)
}