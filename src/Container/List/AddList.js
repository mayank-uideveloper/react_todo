import React from "react";
import ReactDOM from "react-dom";
import CusModal from "./CusModal";

const AddList = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <CusModal headText="Add List" toggleModal={props.toggleModal}  />,
                document.getElementById("addListModal")
            )}
        </>
    );
};

export default AddList;
