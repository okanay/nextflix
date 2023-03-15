import Image from "next/image";

export const KidsAccount =  ({language}) => {

    return (<section id={'kids-account'}  className={'bg-skin-theme-body-1000 py-8 xlPhone:py-24'}>
        <div className={'flex flex-row flex-wrap-reverse justify-center items-center gap-4 xlPhone:gap-16'}>
            <Image src={"/kids.png"} alt={"kids"} width={700} height={640} loading={"lazy"}/>
            <div className={'text-skin-theme-font-900 px-8 tablet:px-4 text-center xlPhone:text-start'}>
                <h1 className={'text-3xl lgPhone:text-4xl tablet:text-5xl max-w-2xl font-semibold'}>{language.t1}</h1>
                <h3 className={'text-base lgPhone:text-xl tablet:text-2xl font-semibold max-w-2xl mt-4'}>{language.t2}</h3>
            </div>
        </div>
    </section>)
}