import React, { useState } from 'react'

export default function AddTodo(props) {
   const [title,setTitle] = useState("");
   const [des,setDes] = useState("");
    const submit=(e)=>{
        e.preventDefault();
      setTitle("");
      setDes("");
      props.addTodo(title,des);
    }
    return (
        <div className="container">
            <form onSubmit={submit}>

          
           <div className="form-group">
            <label htmlFor="todoTitle">Title</label>
            <input
              type="text"
              className="form-control"
              id="todoTitle"
              value={title}
             onChange={(e)=>{
                setTitle(e.target.value);
             }}
             required
            />
          </div> 
            <div className="form-group">
            <label htmlFor="todoInput">Discription</label>
            <textarea
              className="form-control"
              id="Discription"
            value={des}
            onChange={(e)=>{
                setDes(e.target.value);
             }}
             required
            />
          </div>
          <button type="submit" className="btn btn-success btn-sm mt-4">
            Add
          </button>
        </form>
        </div>
      );
}
