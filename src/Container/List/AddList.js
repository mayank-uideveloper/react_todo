import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import Select from "react-select";

import { priorityDropdown, statusDropdown } from "../../Helper/Constants";
import { AddTaskValidation as validate } from "../../Helper/Validations";
import GenericModal from "../../Helper/GenericModal";
import ListAddFunctionality from "./ListAddFunctionality";

const MyCusModal = (props) => {
    const { taskInfo, setTaskInfo, error, taskChangehandler, saveModal, saveEditModal } =
        ListAddFunctionality(validate, props);
    return (
        <GenericModal
            clickHandler={props.toggleModal}
            headText={props.isEdit ? "Edit Task" : "Add Task"}
        >
            <form className="form_whiteBased">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-container mb-3">
                            <label htmlFor="designation" className="add">
                                Date
                            </label>
                            <DatePicker
                                selected={taskInfo.date}
                                onChange={(date) =>
                                    setTaskInfo({
                                        ...taskInfo,
                                        date: date,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-container mb-3">
                            <label htmlFor="taskname" className="add">
                                Task Name*
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                className="form-control"
                                name="taskname"
                                id="taskname"
                                value={taskInfo.taskname}
                                onChange={taskChangehandler}
                            />
                            {error.taskname && (
                                <div className="error_field">
                                    {error.taskname}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="form-container mb-3">
                            <label htmlFor="projectname" className="add">
                                Project Name*
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                className="form-control"
                                name="projectname"
                                id="projectname"
                                value={taskInfo.projectname}
                                onChange={taskChangehandler}
                            />
                            {error.projectname && (
                                <div className="error_field">
                                    {error.projectname}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-container mb-3">
                            <label htmlFor="taskname" className="add">
                                Priority
                            </label>
                            <Select
                                defaultValue={{
                                    label: taskInfo.priority,
                                    value: "low",
                                }}
                                onChange={(e) =>
                                    setTaskInfo({
                                        ...taskInfo,
                                        priority: e.label,
                                    })
                                }
                                options={priorityDropdown}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-container mb-3">
                            <label htmlFor="status" className="add">
                                Status
                            </label>
                            <Select
                                defaultValue={{
                                    label: taskInfo.status,
                                    value: "pending",
                                }}
                                onChange={(e) =>
                                    setTaskInfo({
                                        ...taskInfo,
                                        status: e.label,
                                    })
                                }
                                options={statusDropdown}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="form-container mb-3">
                            <label htmlFor="description" className="add">
                                Description
                            </label>
                            <textarea
                                type="text"
                                autoComplete="off"
                                className="form-control"
                                name="description"
                                id="description"
                                value={taskInfo.description}
                                onChange={taskChangehandler}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </form>
            <div className="modal_footer">
                {props.isEdit ? (
                    <button
                        type="button"
                        className="btn btn_theme"
                        onClick={saveModal}
                    >
                        Save Changes
                    </button>
                ) : (
                    <button
                        type="button"
                        className="btn btn_theme"
                        onClick={saveModal}
                    >
                        Create
                    </button>
                )}

                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={props.toggleModal}
                >
                    Close
                </button>
            </div>
        </GenericModal>
    );
};

const AddList = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <MyCusModal
                    toggleModal={props.toggleModal}
                    isEdit={props.isEdit}
                    editData={props.editData}
                />,
                document.getElementById("addListModal")
            )}
        </>
    );
};

export default AddList;
