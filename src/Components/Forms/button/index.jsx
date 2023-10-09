export const ButtonForm = ({className, nameBtn, type}) => {
    return(
        <button type={type} className={className}>{nameBtn}</button>
    )
}