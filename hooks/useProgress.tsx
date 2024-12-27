import { useState } from "react"

export const useProgress = (): [
  number,
  (start: number, stop: number) => void
] => {
  const [count, setCount] = useState(0)

  const playCounter = (start: number, stop: number) => {
    setCount(start)
    const duration = 1000 // Total duration in ms (1 seconds)
    const interval = 30 // Update every 30ms
    const totalSteps = duration / interval // Total number of steps
    const increment = (stop - start) / totalSteps // Amount to increment per step

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= stop) {
          clearInterval(timer) // Stop the timer once we reach stop
          return stop
        }
        return prev + increment
      })
    }, interval)
  }

  return [Number(Number(count).toFixed(0)), playCounter]
}
