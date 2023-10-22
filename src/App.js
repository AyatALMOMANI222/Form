import React,{useEffect, useState} from "react";
import axios from "axios";

import Form from "./component/form";
import '../src/component/style.css'
function App() {
  const [count,setcount] = useState(0)
  const [formD,setformD] = useState([])


  const handleForm =()=>{
 setcount(count+1)
  }
  const handleClose=()=>{
    setcount(count-1)
  }


const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3001/form");
   setformD([...formD , response.data]);
   console.log(response.data)
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const createInfo = async (name, age, nationality) => {
  const id = Math.round(Math.random() * 9999);
  try {
    const response = await axios.post("http://localhost:3001/form", {
      name,
      age,
      nationality,
      id,
    });
   setformD([...formD, response.data]);
    console.log(response.data.id);
  } catch (error) {
    console.error("Error creating data:", error);
  }
};


const deleteForm = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/form/${id}`);
    const updatedForm = formD.filter((form) => form.id !== id);
    setformD(updatedForm);
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};

useEffect(() => {
  fetchData();
}, []);
///////////////////////////////////////////////////////////////////
    
let forms =[]

for(let i=0 ; i<count ; i++){
  forms.push(<Form />)
}
const retu = forms?.map((form)=>{
  return <div><Form  createInfo={createInfo} deleteForm={deleteForm} form={form}
   formD={formD}/></div>
  
  })

  let content = <div><Form/></div>

  

  return (
  
    <div className="App">
     
{retu}
{/* <div>{count && <div>{content}</div>}</div> */}
<button onClick={handleForm}>add</button>
<button onClick={handleClose}>close</button>
<button onClick={()=>{
  formD?.map((e,i)=>{
    return(
      <div>
        <div>{e.name}</div>
        <button onClick={handle}>delete</button>
      </div>
    )
  })
}}>All Forms</button>
    </div>
  );
}

export default App;

