const ContainerCard = (props) => {
    return(
        <div className="container">
            {props.headingData && 
                <header className="text-center text-light my-4">
                    <h1 className="mb-4">{props.headingData}</h1>
                </header>
            }
            
            {props.children}
        </div>
    )
}

export default ContainerCard;