import Image from "next/image";

export const RegistrationSection = () => {

    return <section id={'registration-section'} className={'w-full mt-32 flex flex-col justify-center items-center'}>
        <div className={'max-w-screen-lg flex flex-col flex-wrap justify-center items-center'}>
            <Image src={"/registerDevices.png"} alt={"tv"} width={500} height={120} className={'w-72'} loading={"lazy"}/>
            <h4 className={'text-xs mt-10'}>STEP <b>1</b> OF <b>3</b></h4>
            <h2 className={'text-4xl font-semibold text-center max-w-screen-smPhone'}>Finish setting up your account</h2>
            <h3 className={'text-[1.10rem] text-center max-w-[275px] mt-4'}>Netflix is personalized for you. Create a password to watch on any device at any time.</h3>
            <button className={'mt-6 py-4 bg-skin-theme-600 rounded max-w-screen-lg w-full text-skin-theme-font-900 text-2xl'}>Next</button>
        </div>
    </section>
}