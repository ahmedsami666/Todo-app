const Input = (props) => {
    var value = ''
    const handleChange = (e) => {
        value = e.target.value 
    }
    const handleClick = () => {
        props.setList(prevState => {
            return [...prevState, value]
        })
        document.getElementsByTagName("input")[0].value = ''
        props.setLeftItems(props.leftItem + 1)
    }
    return (
        <div className={props.mood ? 'input input-dark' : 'input'}>
            <input type="text" placeholder="Create a new todo..." onChange={handleChange}/>
            <div className={props.mood ? 'add add-dark' : 'add'} onClick={handleClick}>+</div>
        </div> 
    )
}
export default Input