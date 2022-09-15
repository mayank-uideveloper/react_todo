const CustomButton = (props) => {
    const customClass = props.cusClass ? props.cusClass : "";
    return (
        <button
            type={props.actionType ? props.actionType : "button"}
            onClick={props.clickEvent ? props.clickEvent : ()=>{}}
            className={`btn mt-3 ${customClass}`}
            disabled={props.btnDisabled ? true : false}
        >
            {props.children}
        </button>
    );
};

export default CustomButton;
