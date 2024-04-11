import { useContext } from "react"
import { ValueContext } from "./GrandParent"
export const Child = () => {
    const {text, setText} = useContext(ValueContext)
  
    const handleChange = (event) => {
      setText(event.target.value)
    }

    return (
        <div>
            <input
              type="text"
              onChange={handleChange}
              />
            <span><i> {text} </i></span>
        </div>
    )
  }