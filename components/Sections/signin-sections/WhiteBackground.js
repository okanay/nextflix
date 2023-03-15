export const WhiteBackground = ({children}) => {

    return (<div className={'w-full h-full bg-skin-theme-body-50 flex flex-col justify-between'}>
        {children}
    </div>)
}