import Parent4 from './Parent4'
import { useState, createContext } from 'react'

export const ValueContext = createContext()
export default function () {
    const [text, setText] = useState('')

    return (
        <ValueContext.Provider value={{ text, setText }}>
            
                <Parent4 />
                <p>{text || "Not value"}</p>
            
        </ValueContext.Provider>
    )
}
