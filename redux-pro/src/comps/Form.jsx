import { useState } from "react"
import { submitForm } from "../features/objSlice"
import { useDispatch } from "react-redux"

const Form = ()=>{
    
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [exp, setExp] = useState(0)
    const dispatch = useDispatch()

    const nameChange = (e)=>{
        setName(e.target.value)
    }
    const jobChange = (e)=>{
        setJob(e.target.value)
    }
    const expChange = (e)=>{
        setExp(e.target.value)
    }

    const onsubmit = (e)=>{
        e.preventDefault()
        dispatch(submitForm(
            
            name,
            job,
            exp
        ))
    }

    return (
        <div>
            <form onSubmit={onsubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={nameChange} value={name} type="text" name="name"/>

                <label htmlFor="job">Job</label>
                <input onChange={jobChange}  value={job} name="job" type="text" />

                <label htmlFor="exp">Exp</label>
                <input onChange={expChange}  value={exp} name="exp" type="number" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


