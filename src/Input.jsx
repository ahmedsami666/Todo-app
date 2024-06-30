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
    }
    return (
        <div className="input">
            <input type="text" placeholder="Create a new todo..." onChange={handleChange}/>
            <div className="add" onClick={handleClick}>+</div>
        </div> 
    )
}
export default Input