const CustomButton = (props) => {
    const customClass = props.cusClass ? props.cusClass : "";
    return (
        <button
            type={props.actionType ? props.actionType : "button"}
            onClick={props.clickEvent}
            className={`btn btn-dark mt-3 ${customClass}`}
            disabled={props.btnDisabled ? true : false}
        >
            {props.children}
        </button>
    );
};

export default CustomButton;
