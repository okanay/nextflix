import Image from "next/image";
import {useState} from "react";

export const LoginBackgroundImage = ({children}) => {

    const [loadingImage, setLoadingImage] = useState(false)


    return (
        <div style={{position: 'relative', overflow: 'hidden'}} className={'bg-skin-theme-body-100 h-[100vh]'}>
            <div className={`absolute w-full h-full z-10`}>
                <div
                    className={`${loadingImage ? LoginBackgroundImageClass.complete : LoginBackgroundImageClass.loading} absolute z-10 w-full h-full`}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: 'auto',
                    backgroundImage: 'url(/contents-image.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'left top',
                    minWidth: '100%',
                    minHeight: '100%'
                }}/>
            </div>
            <div className={'relative z-40 w-full h-full'}>{children}</div>
        </div>
    );
}

export const LoginBackgroundImageClass = {
    loading: "bg-skin-theme-body-1000",
    complete: "tablet:bg-skin-theme-body-1000/50 bg-skin-theme-body-1000"
}
