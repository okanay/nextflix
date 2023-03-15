export const LoginArea = () => {

    return (<section id={'login-area'} className={'flex flex-row justify-start tablet:justify-center mt-2 px-1 rounded w-full items-center tablet:mx-auto tablet:w-fit scale-95 tablet:scale-100 bg-skin-theme-body-1000/75'}>
        <div
            className={'flex flex-col justify-start tablet:px-16 tablet:pt-12 tablet:pb-40 bg-transparent w-full tablet:w-[450px] gap-4 text-skin-theme-font-900'}>
            <h1 className={'text-3xl font-bold mb-4'}>Oturum Aç</h1>
            <form action="" className={'flex flex-col gap-4'}>
                <input type="text" className={'w-full py-3 px-3 bg-skin-theme-body-900 rounded focus:outline-none'}
                       placeholder={'email'}/>
                <input type="password" className={'w-full py-3 px-4 bg-skin-theme-body-900 rounded focus:outline-none'}
                       placeholder={'password'}/>
                <button className={'w-full py-3 px-4 bg-skin-theme-600 rounded mt-8'}>Sign In</button>
                <div className={'flex flex-row justify-between w-full text-xs items-center text-skin-theme-font-700'}>
                    <div className={'flex flex-row justify-start gap-1 items-center'}>
                        <input type="checkbox"/>
                        <p>Remember me</p>
                    </div>
                    <p>Need help?</p>
                </div>
                <div className={'flex flex-col justify-start text-xs mt-8 text-skin-theme-font-700'}>
                    <p className={'text-base'}>Netflixe katılmak ister misiniz? <span
                        className={'text-skin-theme-font-900'}>Şimdi kaydolun.</span></p>
                    <div className={'mt-2'}>
                        <p>Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor. </p>
                        <p className={'text-blue-600'}>Daha fazlasını öğrenin.</p>
                    </div>
                </div>
            </form>
        </div>

    </section>)
}

export default LoginArea