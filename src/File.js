import React, { useState } from 'react'
//📃📃
import './App.css'
export default function File({fl,fileUpdater}) {
  
   
const {id,name,isFolder,items}=fl;
const [child,setChild]=useState(false);
const [input,setInput]=useState(false);
const [newfile,setNewFile]=useState("");

const childHandler=(e)=>{
  e.stopPropagation()
setChild(!child)
}
const fileHandler=(e)=>{
  
  if(e.key === "Enter" && e.target.value){
    let n=e.target.value
    fl.items.unshift(
      {
        id:id+"1",
        name: n+'',
        isFolder: true,
        items: []
      })
      
    
    console.log(fl.items)
    setInput(false)
  }
    //setNewFile(e.target.value)
}
  return (
    <>{
    isFolder &&
    <div className='file' onClick={childHandler}>
    <div className='folder'><span >📁{name}</span><span onClick={()=>{setInput(!input)}}>+</span></div>
    {
      input && <input type='text' onKeyDown={fileHandler}></input>
    }
     {child &&
      items && fl.items.map((f)=>{
            return <File fl={f}/>
      })
     }
  </div>
  }
  { 
    !isFolder &&
    <div className='file' onClick={childHandler}>
      {<span className='folder'>📃{name}</span>}
       
    </div>
  }</>
  )
}

