export const WhiteBackground = ({children}) => {

    return (<div className={'w-full sm:h-[100vh] bg-skin-theme-body-50 flex flex-col justify-between'}>
        {children}
    </div>)
}