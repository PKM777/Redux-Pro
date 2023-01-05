
import { useSelector , useDispatch } from 'react-redux'
import { increment } from '../features/counterSlice'

const Counter = () => {
      
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()

  return (
    <div>
        <h1>{count}</h1>
        <button
         onClick={(e)=>dispatch(increment(e))}
         >Increment</button>
    </div>
  )
}

export default Counter