const List = (props) => {
    const createList = (list, index) => {
        return (
            <div className={props.mood ? 'list-item list-item-dark' : 'list-item'}>
                <div className={props.mood ? 'checkbox checkbox-dark' : 'checkbox'}></div>
                <span>{props.list[index]}</span>
            </div>
        )
    }
    return (
        <div className={props.mood ? 'list list-dark' : 'list'}>
            {props.list.map(createList)}
            <div className="list-data">
                <span>{props.list.length} items left</span>
                <span>All</span>
                <span>Active</span>
                <span>Completed</span>
                <span>Clear Completed</span>
            </div>
        </div>
    )
}
export default List