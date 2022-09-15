import { useState } from "react";

import CustomCard from "../../UI/CustomCard";
import CustomButton from "../../UI/CustomButton";
import AddList from "./AddList";

const List = () => {
    const [addModal, setAddModal] = useState(false);

    //Modal open function
    const toggleModal = (e) => {
        setAddModal(!addModal);
    };

    return (
        <>
            <CustomCard>
                <div className="section_head">
                    <h3>Task List</h3>
                    <CustomButton cusClass="btn_theme" clickEvent={toggleModal}>
                        Add Task
                    </CustomButton>
                </div>
            </CustomCard>
            {addModal && <AddList toggleModal={toggleModal} />}

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                </div>
            </div>
        </>
    );
};

export default List;
