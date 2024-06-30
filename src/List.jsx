const List = (props) => {
    const handleClick = (e) => {
        var id = e.target.id
        var checkedbox = document.getElementById(id)
        if (props.checked[id] === true){
            checkedbox.classList.remove('active-checked')
            props.setChecked(prevState => {
                return {
                    ...prevState, [id]: false
                }
            })
            props.setLeftItems(props.leftItem + 1)
        } else {
            checkedbox.classList.add('active-checked')
            props.setChecked(prevState => {
                return {
                    ...prevState, [id]: true
                }
            })
            props.setLeftItems(props.leftItem - 1)
        }
    }
    const createList = (list, index) => {
        return (
            <div className={props.mood ? 'list-item list-item-dark' : 'list-item'}>
                <div className={props.mood ? 'checkbox checkbox-dark' : 'checkbox'} id={index} onClick={handleClick}>
                    {props.checked[index] ? <img id={index} src="./images/icon-check.svg" alt="check"/> : null}
                </div>
                <span id={index} className={props.checked[index] ? 'checked-item' : ''}> {props.list[index]} </span>
            </div>
        )
    }
    return (
        <div className={props.mood ? 'list list-dark' : 'list'}>
            {props.list.map(createList)}
            <div className="list-data">
                <span>{props.leftItem} items left</span>
                <span>All</span>
                <span>Active</span>
                <span>Completed</span>
                <span>Clear Completed</span>
            </div>
        </div>
    )
}
export default List