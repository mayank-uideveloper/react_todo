import { useEffect, useState } from "react";
import { storageInfo } from "../../Helper/Storage";
import { taskListInfo } from "../../Helper/Constants";

const ListAddFunctionality = (validate, props) => {
    const [taskInfo, setTaskInfo] = useState(() => (
        props.isEdit ? 
        {
            date: new Date(props.editData.date),
            taskname: props.editData.taskname,
            projectname: props.editData.projectname,
            priority: props.editData.priority,
            status: props.editData.status,
            description: props.editData.description,
            id: props.editData.id,
        } :
        {
            date: new Date(),
            taskname: "",
            projectname: "",
            priority: "Low",
            status: "Pending",
            description: "",
            id: '',
        }
        ));

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
            if(taskInfo.id === props.editData.id) {
                setTaskData((prevData) => {
                    console.log(prevData);
                    return [
                        ...prevData,
                        {...taskInfo}
                    ]
                });
            }else {
                setTaskData((prevData) => {
                    return [
                        ...prevData,
                        {
                            ...taskInfo,
                            id: Math.floor(Math.random().toString() * 1000),
                        },
                    ];
                });
            }
            

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
            console.log(taskInfo);

            if(taskInfo.id === props.editData.id) {

            }
        }
    }

    useEffect(() => {
        localStorage.removeItem(taskListInfo)
        localStorage.setItem(taskListInfo, JSON.stringify(taskData));
    }, [taskData]);

    return {taskInfo,setTaskInfo, error, taskData, taskChangehandler, saveModal, saveEditModal};
}

export default ListAddFunctionality;