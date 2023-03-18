export const PeerInput = ({id, defaultValue, placeholder}) => {

    return (<div className={'relative peer w-full'}>
            <input type="text"
                   id={id}
                   disabled
                   defaultValue={defaultValue}
                   className={'w-full pt-4 pb-2 px-3 bg-skin-theme-body-50 rounded focus:outline-none mb-2 border border-skin-theme-body-400 peer placeholder:text-transparent focus:outline-none'}
                   placeholder={"."}/>
            <label htmlFor={id}
                   className={`absolute text-gray-600/60 transition-all duration-300
                        top-1 left-3 text-[0.6rem] peer-placeholder-shown:text-gray-600/60
                        peer-placeholder-shown:top-4 peer-placeholder-shown:left-3.5 peer-placeholder-shown:text-base`}>{placeholder}</label>
        </div>)
}