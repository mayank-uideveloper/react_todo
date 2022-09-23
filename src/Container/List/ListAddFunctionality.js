import { useEffect, useState } from "react";
import { storageInfo } from "../../Helper/Storage";
import { taskListInfo } from "../../Helper/Constants";

const ListAddFunctionality = (validate, props) => {
    const [taskInfo, setTaskInfo] = useState(() =>
        props.isEdit
            ? {
                  date: new Date(props.editData.date),
                  taskname: props.editData.taskname,
                  projectname: props.editData.projectname,
                  priority: props.editData.priority,
                  status: props.editData.status,
                  description: props.editData.description,
                  id: props.editData.id,
              }
            : {
                  date: new Date(),
                  taskname: "",
                  projectname: "",
                  priority: "Low",
                  status: "Pending",
                  description: "",
                  id: "",
              }
    );

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

        if (Object.keys(errData).length === 0) {
            setTaskData((prevData) => {
                return [
                    ...prevData,
                    {
                        ...taskInfo,
                        id: Math.floor(Math.random().toString() * 1000),
                    },
                ];
            });

            setTimeout(() => {
                props.toggleModal();
            }, 500);
        }
    };

    const saveEditModal = (e) => {
        e.preventDefault();
        console.log(e);
        let errData = validate(taskInfo);
        setError((prev) => ({ ...errData }));

        if (Object.keys(errData).length === 0) {
            let taskList = JSON.parse(localStorage.getItem(taskListInfo));

            taskList = taskList.map((value) => {
                if (value.id === props.editData.id) {
                    return {...taskInfo};
                }
                return value;
            });            
            localStorage.setItem(taskListInfo, JSON.stringify(taskList));
            setTaskData(taskList);

            setTimeout(() => {
                props.toggleModal();
            }, 500);
        }
    };

    useEffect(() => {
        localStorage.setItem(taskListInfo, JSON.stringify(taskData));
    }, [taskData]);

    return {
        taskInfo,
        setTaskInfo,
        error,
        taskData,
        taskChangehandler,
        saveModal,
        saveEditModal,
    };
};

export default ListAddFunctionality;
