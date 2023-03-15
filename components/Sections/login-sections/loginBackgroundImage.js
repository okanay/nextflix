import Image from "next/image";
import {useState} from "react";

export const LoginBackgroundImage = ({children}) => {

    const [loadingImage, setLoadingImage] = useState(false)


    return (
        <div style={{position: 'relative'}} className={'w-full h-full bg-black'}>
            <div className={`absolute w-full h-full z-10`}>
                <div
                    className={`${loadingImage ? LoginBackgroundImageClass.complete : LoginBackgroundImageClass.loading} absolute z-10 w-full h-[100vh] h-full bg-cover`}
                />
                <Image
                    src={'/contents-image.jpg'}
                    alt={"contents"}
                    width={2460}
                    height={1640}
                    className={'m-auto w-full h-full hidden tablet:block'}
                    onLoadingComplete={() => {setLoadingImage(true)}}/>
            </div>

            <div className={'relative z-40 w-full h-full'}>{children}</div>
        </div>
    );
}

export const LoginBackgroundImageClass = {
    loading: "bg-skin-theme-body-1000",
    complete: "tablet:bg-skin-theme-body-1000/50 bg-skin-theme-body-1000"
}
