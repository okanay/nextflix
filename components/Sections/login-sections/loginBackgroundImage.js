import Image from "next/image";
import {useState} from "react";

export const LoginBackgroundImage = ({children}) => {

    const [loadingImage, setLoadingImage] = useState(false)


    return (
        <div style={{position: 'relative'}} className={''}>
            <div className={`absolute z-10 w-full h-full bg-cover bg-left-top`}>
                <div
                    className={`${loadingImage ? LoginBackgroundImageClass.complete : LoginBackgroundImageClass.loading} absolute z-10 w-full h-full`}
                />
                <Image
                    loading={'eager'}
                    src={'/contents-image.jpg'}
                    alt={"contents"}
                    width={2460}
                    height={1640}
                    className={'hidden tablet:block h-full object-cover object-left-top'}
                    onLoadingComplete={() => {setLoadingImage(true)}}/>
            </div>

            <div className={'relative z-40'}>{children}</div>
        </div>
    );
}

export const LoginBackgroundImageClass = {
    loading: "bg-skin-theme-body-1000",
    complete: "tablet:bg-skin-theme-body-1000/50 bg-skin-theme-body-1000"
}
