import { useState } from 'react';

import CustomCard from '../../UI/CustomCard';
import CustomButton from '../../UI/CustomButton';
import AddList from './AddList';

const List = () => {
    const [addModal, setAddModal] = useState(false);
    
    //Modal open function
    const toggleModal = (e) => {
        e.preventDefault();
        setAddModal(!addModal);
    }

    const saveModal = (e) => {
        e.preventDefault();
        setAddModal(false);
    }
    return (
        <>
            <CustomCard>
                <div className="section_head">
                    <h3>Task List</h3>
                    <CustomButton clickEvent={toggleModal}>Add Task</CustomButton>
                </div>
                
            </CustomCard>
            {addModal &&
                <AddList saveModal={saveModal} toggleModal={toggleModal} />
            }
        
        </>
    )
    
}

export default List;