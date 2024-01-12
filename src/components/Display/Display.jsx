import "./Display.css"

const Display = ({minutes,seconds,hours,action}) => {

    const FormatTime = (time) => {
        return time < 10 || time == 0 ? `0${time}`: time
      }

  return (
    <>
    <span className="display-count">{`${FormatTime(hours)}:${FormatTime(minutes)}:${FormatTime(seconds)}`}</span>
    </>
        
    
  )
}

export default Display