import { useState } from 'react'
import MyButton from '../ui/MyButton'

export default function (props) {
    const [count, countSet] = useState(props.init)

    return (
        <MyButton
            typeBtn={props.typeBtn}
            text={count}
            handler={() => countSet(count + 1)}
        />
    )
}
