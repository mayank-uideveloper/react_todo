const UsersList = props => {
    return(
        <>
            {props.userList.length > 0 ? 
                <ul className="list-group todos mx-auto text-light mt-5">
                    {props.userList.map(list => {
                        return(
                            <li key={list.id} className="list-group-item d-flex justify-content-between align-items-center mb-2">
                                <div className="d-flex flex-column">
                                    <span>{list.name} ({list.age} year old)</span>
                                    <span>{list.designation}</span>
                                </div>
                                <i className="far fa-trash-alt delete" onClick={() => props.deleteUser(list.id)}></i>
                            </li>
                        )
                    })}
                </ul>

                :
                
                <ul className="list-group todos mx-auto text-light mt-5">
                    <li className="list-group-item text-center mb-2">
                        <span>No user list found</span>
                    </li>
                </ul>
            }
        </>
    )
}

export default UsersList;