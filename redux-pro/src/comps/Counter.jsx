
import { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment, incrementByValue } from '../features/counterSlice'
import { allObjs } from '../features/objSlice'


const Counter = () => {

    const [bar, setbar] = useState(0)
    
    const count = useSelector((state)=> state.counter.count)
    
 
    const dispatch = useDispatch()
    const posts = useSelector(allObjs)
    const addValue = Number(bar) | 0
    const barSet = (e)=>{
      setbar(e.target.value)
    }

    const renderChars = posts.map((items)=>(
      <div key={items.id}>
        <h1>{items.name}</h1>
        <h2>{items.job}</h2>
        <h3>{items.exp}</h3>
      </div>
    ))

  return (
    <div>
        <h1>{count}</h1>
        <input value={bar} onChange={(e)=>barSet(e)} />
        <button onClick={()=> dispatch(incrementByValue(addValue))}>Increment By Value</button>
        <button
         onClick={()=>dispatch(increment())}
         >Increment</button>

         <div>
          {renderChars}
         </div>

    </div>
  )
}

export default Counter
