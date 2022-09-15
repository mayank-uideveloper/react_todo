const GenericModal = (props) => {
    return (
        <>
            <div className="modal_wrapper">
                <div
                    className="modal_overlay"
                    onClick={props.clickHandler}
                ></div>
                <div className="modal_container">
                    {props.headText && (
                        <div className="modal_head">{props.headText}</div>
                    )}
                    <div className="modal_body">{props.children}</div>
                </div>
            </div>
        </>
    );
};

export default GenericModal;
