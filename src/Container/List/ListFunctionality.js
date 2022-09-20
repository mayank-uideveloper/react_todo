import { useEffect, useState } from "react";
import { storageInfo } from "../../Helper/Storage";
import { taskListInfo } from "../../Helper/Constants";

const ListFunctionality = () => {

    const [addModal, setAddModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [editData, setEditData] = useState({});
    const [renderTaskList, setRenderTaskList] = useState(storageInfo.renderTaskObj());

    //Modal open function
    const toggleModal = (e) => {
        setAddModal(!addModal);
        setIsEdit(false);
    };

    const deleteHandler =(id) => {
        console.log(id);
        const abc = renderTaskList.filter((item) => item.id !== id);
        setRenderTaskList(abc);
    }

    const editHandler = (id) => {
        const editData = renderTaskList.filter((item) => item.id === id);
        setIsEdit(true);
        setEditData((prev) => ({...editData[0], id:id}));
        if(editData) {
            setAddModal(true);
        }
    }

    useEffect(() => {
        localStorage.setItem(taskListInfo, JSON.stringify(renderTaskList));
    },[renderTaskList]);

    //onClick={() => deleteHandler(data.id)}

    return {isEdit, addModal, toggleModal, deleteHandler, editHandler,editData, renderTaskList};
}

export default ListFunctionality;