import CustomCard from "../../UI/CustomCard";
import CustomButton from "../../UI/CustomButton";
import AddList from "./AddList";
import ListFunctionality from "./ListFunctionality";

const List = () => {
    const {
        isEdit,
        addModal,
        toggleModal,
        deleteHandler,
        editHandler,
        editData,
        renderTaskList,
    } = ListFunctionality();

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
            {addModal && (
                <AddList
                    isEdit={isEdit}
                    editData={editData}
                    toggleModal={toggleModal}
                />
            )}

            {renderTaskList.length > 0 && (
                <div className="">
                    {renderTaskList.map((data) => {
                        return (
                            <div
                                key={data.id}
                                className=""
                                onClick={() => editHandler(data.id)}
                            >
                                <div className="card">
                                    {data.id}
                                    {data.taskname}
                                </div>
                            </div>
                        );
                    })}
                    <div>Samii</div>
                </div>
            )}
        </>
    );
};

export default List;
