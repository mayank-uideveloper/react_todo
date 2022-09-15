import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";

import { AddTaskValidation as validate } from "../../Helper/Validations";
import { priorityDropdown, statusDropdown, taskListInfo } from "../../Helper/Constants";
import GenericModal from "../../Helper/GenericModal";
import { storageInfo } from "../../Helper/Storage";

const CusModal = (props) => {
    const [taskInfo, setTaskInfo] = useState(() => ({
        date: new Date(),
        taskname: "",
        projectname: "",
        priority: "Low",
        status: "Pending",
        description: "",
    }));

    const [error, setError] = useState({});
    const [taskData, setTaskData] = useState(storageInfo.renderTaskObj);

    const taskChangehandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setTaskInfo({
            ...taskInfo,
            [name]: value,
        });
    };

    const saveModal = (e) => {
        e.preventDefault();
        let errData = validate(taskInfo);
        setError((prev) => ({ ...errData }));

        

        if(Object.keys(errData).length === 0) {
            let getDate = taskInfo.date.getDate();
            let getMonth = taskInfo.date.getMonth() + 1;
            let getYear = taskInfo.date.getFullYear();

            let cusDate = `${getDate}-${getMonth}-${getYear}`;

            setTaskData((prevData) => {
                return [
                    ...prevData,{
                        ...taskInfo,
                        id: Math.floor(Math.random().toString() * 1000),
                        date: cusDate,
                    }
                ]
            });

            setTimeout(()=> {
                props.toggleModal();
            },500);
        }
        
    };

    useEffect(() => {
        localStorage.setItem(taskListInfo,JSON.stringify(taskData));
    },[taskData])

    return (
        <>
            <GenericModal clickHandler={props.toggleModal} headText="Add Task">
                <form className="form_whiteBased">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-container mb-3">
                                <label htmlFor="designation" className="add">
                                    Date
                                </label>
                                <DatePicker
                                    dateFormat="dd-MM-y"
                                    selected={taskInfo.date}
                                    minDate={new Date()}
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
                                    defaultValue={{label: taskInfo.priority, value:"low"}}
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
                    <button
                        type="button"
                        className="btn btn_theme"
                        onClick={saveModal}
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={props.toggleModal}
                    >
                        Close
                    </button>
                </div>
            </GenericModal>
        </>
    );
};

export default CusModal;
