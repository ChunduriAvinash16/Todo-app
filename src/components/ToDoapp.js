import React, { useState } from 'react'
import ToDoList from './ToDoList';

export default function ToDoapp() {
    const [add, setadd] = useState(false);
    function handleAdd(e){
      setadd(true)
      console.log(add);
    }
    return (
        <div className="flex h-screen bg-gradient-to-r from-purple-400  to-blue-200">
            <div className="m-auto bg-gray-400 shadow-2xl p-10  w-1/3">
                <div className="flex flex-wrap justify-between">
                    <p className="text-2xl p-2 font-bold rounded">To-do List</p>
                        <button className="px-4 bg-blue-500 text-1xl rounded hover:bg-red-800 hover:text-white" onClick={handleAdd}>Add To-Do</button>
                </div>
                <ToDoList add={add} setadd={setadd}/>
            </div>
         </div>
    )
}
