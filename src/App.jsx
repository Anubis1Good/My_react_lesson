import './App.css'
import GrandParent from './components/ContextSample/GrandParent'
// import { Parent2 } from './components/ChildToParent/ChildToParent'
// import Clicker from './components/Clicker'
// import { Parent3 } from './components/Siblings/Siblings'
// import { Parent } from './components/ParentToChild/ParentToChild'

import MyButton from './ui/MyButton'

import MyH1 from './ui/MyH1.jsx'

function App() {
    // здесь могут быть какие-то
    // предварительные вычиления
    return (
        <>
            <MyH1 text="State work!" />
            {/* <Clicker init={0} typeBtn="success" />
            <Clicker init={10} typeBtn="danger" />
            <Clicker init={-5} />
            <MyButton
                typeBtn="success"
                text="Привет!"
                handler={() => alert('И тебе привет!')}
            /> */}
            {/* <Parent/> */}
            {/* <Parent2/> */}
            {/* <Parent3/> */}
            <GrandParent/>
        </>
    )
}

export default App
