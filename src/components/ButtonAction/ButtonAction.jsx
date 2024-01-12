import "./ButtonAction.css"

const ButtonAction = ({ children, handle, state }) => {

    return (
        <button className="btn-timer" onClick={()=>handle(state)}>{children}</button>
    )
}

export default ButtonAction