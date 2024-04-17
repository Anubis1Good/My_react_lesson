import Timer from './Timer'
import MyButton from '../../ui/MyButton/MyButton'
import { useState, useEffect } from 'react'

export default function () {
    const [intervalValue, setIntervalValue] = useState(1000)
    const [counter, setCounter] = useState(0)

    const handleIntervalClick = (value) => {
        setIntervalValue(value)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => prev + 1)
        }, intervalValue)
        return () => {
            clearInterval(interval)
        }
    }, [intervalValue])

    return (
        <div>
            <Timer intervalValue={counter} />
            <MyButton handler={() => handleIntervalClick(100)} text="100ms" />
            <MyButton handler={() => handleIntervalClick(500)} text="500ms" />
            <MyButton handler={() => handleIntervalClick(1000)} text="1000ms" />
        </div>
    )
}
