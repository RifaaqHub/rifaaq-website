'use client'

import { useState, useEffect } from 'react'
import { differenceInSeconds, addSeconds, startOfTomorrow } from 'date-fns'

interface CountdownResult {
  days: number | ''
  hours: number | ''
  minutes: number | ''
  seconds: number | ''
}

const useCountdown = (deadline?: Date): CountdownResult => {
  const defaultDeadline = startOfTomorrow() // Default deadline is one day from now
  const targetDate = deadline || defaultDeadline

  const [countdown, setCountdown] = useState<CountdownResult>({
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const diff = differenceInSeconds(targetDate, now)

      if (diff <= 0) {
        clearInterval(interval)
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      } else {
        setCountdown({
          days: Math.floor(diff / (3600 * 24)),
          hours: Math.floor((diff % (3600 * 24)) / 3600),
          minutes: Math.floor((diff % 3600) / 60),
          seconds: diff % 60,
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return countdown
}

export default useCountdown
