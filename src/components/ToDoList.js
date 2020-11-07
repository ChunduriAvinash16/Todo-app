import React, { useState } from 'react'

export default function ToDoList({add,setadd}) {
    const [list, setlist] = useState(["Coffee","Break-fast","Classes"])
    const [item, setitem] = useState("")
    const [onHover, setonHover] = useState(-1);
    function handleChange(e){
        setitem(e.target.value)
        //setlist([e.target.value,...list])
    }
    function handleAdd(){
        if(item!=""){
            setlist([item,...list]);
            setadd(false);
        }
    }

    function handleRemove(index){
        setlist(list.filter((list,i)=>i!=index))        
    }
    return (
        <div>
            {
                add &&
                <div className="flex flex-wrap justify-between">
                    <input type="text" placeholder="item" className="my-2 w-5/6 p-2 "  onChange={handleChange}/>
                    <button  className="rounded bg-red-800 p-2 h-10 my-2 w-1/6" onClick={handleAdd}>Add</button>
                </div>
            }
        {
            list.map((listitem,index)=>(
                <div key={index} className="flex flex-wrap justify-between bg-green-200 my-2  p-2 hover:bg-green-400" onMouseEnter={()=>setonHover(index)} onMouseLeave={()=>setonHover(-1)} onClick={()=>handleRemove(index)}>
                    <p>{listitem}</p>
                    <i className={`fas fa-times cursor-pointer ${onHover===index?"":"hidden"}`}></i>
                </div>
            ))
        }
        </div>

    )
}
