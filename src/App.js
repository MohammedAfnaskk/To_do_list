import React from 'react';
import './App.css';
import { useState } from 'react'; import './App.css';

 function App() {
  const [toDos,setToDos]= useState([])
  const[toDo,setToDo] =useState('')
  const[edit, setEdit] =useState()
  const[editedValue, setEdited] =useState('')

  const deleteToDo =(id)=>{
    setToDos(toDos.filter((obj)=>
    obj.id !==id))
    
  }

  const today = new Date().getDay()
  const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

   return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's {dayName[today]}🌝</h2>
    </div>
    {edit ? <div className='input'>
      <input value={editedValue} onChange={(e)=>setEdited(e.target.value)} type="text"/>
      <i onClick={(e)=>{setToDos(toDos.filter(item=>{if(item.id===edit.id){item.text=editedValue}return item}));
      setEdit('')
      setEdited('')
      setToDo('')
      }}
      className="fas fa-plus"></i>
      </div>
      :
      <div className="input">
      <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />

      <i onClick={()=>
        {if(!toDos.some(item=>item.text === toDo ||toDo.trim()==='')){
          setToDos([...toDos, {id:Date.now() ,text:toDo,status:false}]);
         setToDo('')
         }else{
          alert('Try different value')
          }
          }
        }
           className="fas fa-plus"></i>
      </div>
    }
    <div className="todos">
    {toDos.map((obj) => (
          <div key={obj.id} className="todo">
            <div className="left">
              <input
                onChange={(e) => {
                  setToDos(
                    toDos.map((obj2) => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked;
                      }
                      return obj2;
                    })
                  )
                }}
                value={obj.status}
                type="checkbox"
                name=""
                id=""
              />
              <p className={obj.status ? 'text-line' : ''}>{obj.text}</p>
            </div>
            <div className="right">
              <i className="fa fa-edit" onClick={() => { setEdit(obj); setEdited(obj.text)}}></i>
              <i className="fas fa-times" onClick={() => deleteToDo(obj.id)}></i>
            </div>
          </div>
        ))}
    </div>
  </div>
);
}

export default App
 