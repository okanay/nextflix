import {useSelector} from "react-redux";
import Image from "next/image";
import {useEffect, useRef} from "react";
import {WatchTVImage} from "../../UI/Index-UI/watchTVImage";

export const WatchTV = ({language}) => {


    return (<section id={'watch-on-tv'} className={'bg-skin-theme-body-1000 pt-8 pb-16 xlPhone:py-8'}>
        <div className={'flex flex-row flex-wrap justify-center items-center gap-4 xlPhone:gap-8'}>
            <div className={'text-skin-theme-font-900 px-8 tablet:px-4 text-center xlPhone:text-start'}>
                <h1 className={'text-3xl lgPhone:text-4xl tablet:text-5xl max-w-2xl font-semibold'}>{language.t1}</h1>
                <h3 className={'text-base lgPhone:text-xl tablet:text-2xl font-semibold max-w-2xl mt-4'}>{language.t2}</h3>
            </div>
           <WatchTVImage language={language}/>
        </div>
    </section>)
}