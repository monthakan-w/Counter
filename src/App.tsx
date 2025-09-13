// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import CounterScore from './component/CounterScore'
// import CounterInc from './component/CounterInc'
// import CounterDec from './component/CounterDec'

// import { TodoForm } from './component/Todocomponent/todoForm'
// import { ShowTodoList } from './component/Todocomponent/showTodoList'

import { CourseForm } from './component/CourseForm'
import { CourseList } from './component/CourseList'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <CourseForm />
        <CourseList />



        {/* <TodoForm />
        <ShowTodoList /> */}
       
        {/* <CounterScore />
         <CounterInc />
        <CounterDec /> */}
      </div>
    </>
  )
}

export default App
