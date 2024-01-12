
import { useState, useEffect } from "react"


import "./Count.css"
import { useRef } from "react"


const Count = () => {
  const [action, setAction] = useState()

  const secondsRef = useRef(0)
  const minutesRef = useRef(0)
  const hoursRef = useRef(0)
  const interval = useRef()

  const [secondsTime, setSecondsTime] = useState()
  const [minutesTime, setMinutesTime] = useState()
  const [hoursTime, setHoursTime] = useState()

  const FormatTime = (time) => {
    return time < 10 ? `0${time}` : time
  }

  const start = () => {
    secondsRef.current++

    if (secondsRef.current === 60) {
      minutesRef.current++
      secondsRef.current = 0;
    }
    if (minutesRef.current === 60) {
      hoursRef.current++
      minutesRef.current = 0;
    }

    setSecondsTime(FormatTime(secondsRef.current))
    setMinutesTime(FormatTime(minutesRef.current))
    setHoursTime(FormatTime(hoursRef.current))

  }

  const reset = () => {
    clearInterval(interval.current)


    secondsRef.current = 0
    minutesRef.current = 0
    hoursRef.current = 0
    setSecondsTime(0)
    setMinutesTime(0)
    setHoursTime(0)


  }




  useEffect(() => {
    if (action === "running") {
      interval.current = setInterval(start, 1000)
    }
    if (action === "stop") {
      clearInterval(interval.current)
    }
    if (action === "reset") {
      reset();
    }

  }, [action])


  return (
    <div>
      {`${hoursTime}:${minutesTime}:${secondsTime}`}
      <button onClick={() => setAction("running")}>Começar</button>
      <button onClick={() => setAction("stop")}>Parar</button>
      <button onClick={() => setAction("reset")}>Parar</button>

    </div>
  )


}

export default Count