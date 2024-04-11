import { useState } from 'react'
import { Sibling1 } from './Sibling1'
import { Sibling2 } from './Sibling2'

export const Parent3 = () => {
  const [value, setValue] = useState('')

  const handleChange = (value) => {
    setValue(value)
  }

  return (
    <div>
      <Sibling1 onChange={handleChange} />
      <Sibling2 value={value} />
    </div>
  )
}




