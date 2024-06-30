const Header = (props) => {
    const handleClick = () => {
        props.setMood(!props.mood)
    }
    return (
        <div className="header">
            <h1>Todo</h1>
            <img src={`./images/icon-${props.mood ? 'sun' : 'moon'}.svg`} alt="icon-moon" onClick={handleClick}/>
        </div>
    )
}
export default Header