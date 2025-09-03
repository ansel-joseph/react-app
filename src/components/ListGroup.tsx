import {MouseEvent} from "react";

function ListGroup() {
    let items = ['New York', 'Chicago', 'Delhi', 'Tokyo', 'London'];

    //Event Handler
    const handleClick = (event : MouseEvent) => console.log(event);

    return (
        <>
            <h1>List</h1>

            {items.length === 0 && <p>No Items found</p>}
            <ul className="list-group">
                {items.map((item, index) => (<li className="list-group-item" key={item} onClick={handleClick}>{item}</li>))}

            </ul>
        </>
    );
}
export default ListGroup;