import { useEffect, useState } from "react"

const Timer = () => {
  const [time, setTime] = useState(null)

  useEffect(() => {
    const now = new Date().toLocaleTimeString()
    const getCurrentTimeString = setInterval(() => setTime(now), 1000)
    return () => clearInterval(getCurrentTimeString)
  })

  return (
    <>
      <p>Now is... {time}</p>
    </>
  )
}

export default Timer
