import React,{useState} from "react"
import './style.css'
const Form =({createInfo,deleteForm,formD})=>{

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [nationality, setNationality] = useState("");

const handleClick=(name,age,nationality)=>{
    createInfo(name,age,nationality)
}

const arr =formD.map((e,i)=>{
    return (
        <div>
<div>{e.name}</div>
<button onClick={(id)=>deleteForm(e.id)}>delete</button>



</div>
)
})




   
    return(
        <div>
<input placeholder="name" onChange={(e)=>setName(e.target.value)}/>
<input placeholder="age" onChange={(e)=>setAge(e.target.value)} />
<input placeholder="nationality" onChange={(e)=>setNationality(e.target.value)} />
<button onClick={()=>handleClick(name,age,nationality)}>enter</button>
{/* <button onClick={()=>handleDelete}>delete</button> */}
{arr}
        </div>
    )
}
export default Form