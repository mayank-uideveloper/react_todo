const CusModal = (props) => {
    return(
        <div className="modal_wrapper">
            <div className="modal_overlay" onClick={props.toggleModal}></div>
            <div className="modal_container">
                <div className="modal_head">{props.headText}</div>
                <div className="modal_body">
                    <form>
                        <div className="form-container mb-3">
                            <label
                                htmlFor="designation"
                                className="add text-light"
                            >
                                Designation
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                className="form-control"
                                name="designation"
                                id="designation"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CusModal;