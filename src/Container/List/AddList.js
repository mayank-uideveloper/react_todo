import React from "react";
import ReactDOM from "react-dom";
import CusModal from "./CusModal";
const FormModal = (props) => {
    return <CusModal headText={props.headText} toggleModal={props.toggleModal}  />
};

const AddList = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <FormModal
                    headText="Add List"
                    toggleModal={props.toggleModal}
                />,
                document.getElementById("addListModal")
            )}
        </>
    );
};

export default AddList;
