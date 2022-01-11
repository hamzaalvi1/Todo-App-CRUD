import React,{useState} from 'react'

const TodoForm = () => {
    const [todoData,setTodoData]= useState({todoTitle: "",todoDetails:""})
    return (
        <div className='todoForm'>
            <form className='main_Form'>
                <div className="frm-fld">
                   
                    <input type="text" placeholder = "Todo Title" name='todoTitle' 
                      onChange={(evt)=>setTodoData({...todoData,[evt.target.name]:evt.target.value})}                    
                      value={todoData.todoTitle} />
                </div>
                <div className="frm-fld textarea">
                 
                     <textarea placeholder='Todo Details' name="todoDetails"
                     onChange={(evt)=>setTodoData({...todoData,[evt.target.name]:evt.target.value})}                  
                     value={todoData.todoDetails}></textarea>
                </div>
                
                <div className="frm-btn">
                    <button type="submit">Add Todo</button>
                </div>


            </form>
        </div>
    )
}

export default TodoForm
