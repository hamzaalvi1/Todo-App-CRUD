import React from 'react'

const TodoForm = ({todoArray,todoArrayFunc,toggleBtn,todoEditID,todoData,setTodoData,setToggleBtn}) => {
   
    
     
    const formSubmit = (evt)=>{
      evt.preventDefault()

     

      if(!toggleBtn){
      const newTodo = {todoId: Math.ceil(Math.random()* 100000),...todoData}
      todoArrayFunc([...todoArray,newTodo])
      setTodoData({todoTitle: "",todoDetails:""})
      }
      else{
          todoArrayFunc(
            todoArray.map((el)=>{
                if(el.todoId === todoEditID){
                    return {...el,todoTitle:todoData.todoTitle,todoDetails:todoData.todoDetails}
                }
                return el
            })
          )
        setTodoData({todoTitle: "",todoDetails:""}) 
        setToggleBtn(false)


      }

     
    }
  
    return (
        <div className='todoForm'>
            <form className='main_Form' onSubmit={(evt)=>formSubmit(evt)} >
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
                    {
                     toggleBtn ?
                    <button type="click" >Update Todo</button>
                     :
                    <button type="submit">Add Todo</button>
                    }
                </div>


            </form>
        </div>
    )
}

export default TodoForm
