import Link from "next/link";

export const LoginArea = ({language}) => {

    return (<section id={'login-area'}
                     className={'flex flex-row justify-start tablet:justify-center mt-2 px-1 rounded w-full items-center tablet:mx-auto tablet:w-fit scale-95 tablet:scale-100 bg-skin-theme-body-1000/75'}>
        <div
            className={'flex flex-col justify-start tablet:px-16 tablet:pt-12 tablet:pb-40 bg-transparent w-full tablet:w-[450px] gap-4 text-skin-theme-font-900'}>
            <h1 className={'text-3xl font-bold mb-4'}>{language.t1}</h1>
            <form action="" className={'flex flex-col gap-4'}>
                <input type="text" className={'w-full py-3 px-3 bg-skin-theme-body-900 rounded focus:outline-none'}
                       placeholder={language.i1}/>
                <input type="password" className={'w-full py-3 px-4 bg-skin-theme-body-900 rounded focus:outline-none'}
                       placeholder={language.i2}/>
                <button className={'w-full py-3 px-4 bg-skin-theme-600 rounded mt-8'}>{language.b1}</button>
                <div className={'flex flex-row justify-between w-full text-xs items-center text-skin-theme-font-700'}>
                    <div className={'flex flex-row justify-start gap-1 items-center'}>
                        <input type="checkbox"/>
                        <p>{language.i3}</p>
                    </div>
                    <p>{language.l1}</p>
                </div>
                <div className={'flex flex-col justify-start text-xs mt-8 text-skin-theme-font-700'}>
                    <p className={'text-base'}>{language.t2.p1}<Link href={'/signup/registration'}
                        className={'text-skin-theme-font-900'}>{language.t2.l1}</Link></p>
                    <div className={'mt-3'}>
                        <span>{language.t3}</span>
                        <span className={'text-blue-600'}>{language.t4.p2}</span>
                    </div>
                    <span className={'text-blue-600'}>{language.t4.p1}</span>
                </div>
            </form>
        </div>

    </section>)
}

export default LoginArea