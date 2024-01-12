
import { useState, useEffect } from "react"


import "./Count.css"
import { useRef } from "react"
import Display from "../Display/Display"
import ButtonAction from "../ButtonAction/ButtonAction"


const Count = () => {
  const [action, setAction] = useState()

  const secondsRef = useRef(0)
  const minutesRef = useRef(0)
  const hoursRef = useRef(0)
  const interval = useRef()

  const [secondsTime, setSecondsTime] = useState(0)
  const [minutesTime, setMinutesTime] = useState(0)
  const [hoursTime, setHoursTime] = useState(0)



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

    setSecondsTime(secondsRef.current)
    setMinutesTime(minutesRef.current)
    setHoursTime(hoursRef.current)

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



  const HandleAction = (state) => {
    setAction(state)
  }

  return (
    <main className="count-container">
      <Display hours={hoursTime} minutes={minutesTime} seconds={secondsTime} action={action} />

      <div className="flex">
        <ButtonAction handle={HandleAction} state={"running"}>Começar</ButtonAction>
        <ButtonAction handle={HandleAction} state={"stop"}>Parar</ButtonAction>
        <ButtonAction handle={HandleAction} state={"reset"}>Reiniciar</ButtonAction>
      </div>
      
    </main>
  )


}

export default Count