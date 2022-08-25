const CustomButton = props => {
    return (
        <button type={props.actionType ? props.actionType : 'button'} className={`btn ${props.cusClass}`}>
            {props.children}
        </button>
    )
}

export default CustomButton;