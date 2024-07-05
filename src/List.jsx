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
            props.setActive(prevState => {
                return {
                    ...prevState, [id]: true
                }
            })
        } else {
            checkedbox.classList.add('active-checked')
            props.setChecked(prevState => {
                return {
                    ...prevState, [id]: true
                }
            })
            props.setLeftItems(props.leftItem - 1)
            props.setActive(prevState => {
                return {
                    ...prevState, [id]: false
                }
            })
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
    const createActiveList = (list, index) => {
        if (Object.values(props.active)[index] === true) {
            return (
                <div className={props.mood ? 'list-item list-item-dark' : 'list-item'}>
                    <div className={props.mood ? 'checkbox checkbox-dark' : 'checkbox'} id={index} onClick={handleClick}>
                        {props.checked[index] ? <img id={index} src="./images/icon-check.svg" alt="check"/> : null}
                    </div>
                    <span id={index} className={props.checked[index] ? 'checked-item' : ''}> {props.list[index]} </span>
                </div>
            )
        }
    }
    const createCompletedList = (list, index) => {
        if (Object.values(props.active)[index] === false) {
            return (
                <div className={props.mood ? 'list-item list-item-dark' : 'list-item'}>
                    <div className={props.mood ? 'checkbox checkbox-dark' : 'checkbox'} id={index} onClick={handleClick}>
                        {props.checked[index] ? <img id={index} src="./images/icon-check.svg" alt="check"/> : null}
                    </div>
                    <span id={index} className={props.checked[index] ? 'checked-item' : ''}> {props.list[index]} </span>
                </div>
            )
        }
    }
    const handleViewAll = () => {
        props.setView('all')
    }
    const handleActive = () => {
        props.setView('active')
    }
    const handleCopmleted = () => {
        props.setView('completed')
    }
    return (
        <div className={props.mood ? 'list list-dark' : 'list'}>
            {props.view === 'all' ? props.list.map(createList) : null}
            {props.view === 'active' ? props.list.map(createActiveList): null}
            {props.view === 'completed' ? props.list.map(createCompletedList) : null}
            <div className="list-data">
                <span>{props.leftItem} items left</span>
                <span onClick={handleViewAll}>All</span>
                <span onClick={handleActive}>Active</span>
                <span onClick={handleCopmleted}>Completed</span>
                <span>Clear Completed</span>
            </div>
        </div>
    )
}
export default List