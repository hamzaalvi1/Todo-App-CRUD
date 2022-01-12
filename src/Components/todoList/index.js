import React from 'react'

const TodoList = ({todoItems,todoArrayFunc,onEditItem}) => {
  
  const onDeleteItem = (id)=>{
     const updateList = todoItems.filter((todoItems)=>{
      return todoItems.todoId !== id
     })
     todoArrayFunc(updateList)
  }



    return (
        <div className='todoList'>
            <ul>
                {todoItems.map((tData)=>{
                  return(
                <li key={tData.todoId}>
                    <div className="todoMain">
                      <div className="todoData">
                      <h4>
                           {tData.todoTitle}
                       </h4>
                       <p>
                          {tData.todoDetails}
                       </p>
                      </div>
                      <div className="todoActions">
                          <button className="editBtn" onClick={()=>onEditItem(tData.todoId)}>
                          <i className="far fa-edit"></i>
                          </button>
                          <button className="deleteBtn" onClick={()=>onDeleteItem(tData.todoId)}>
                          <i className="fas fa-trash-alt"></i>
                          </button>
                      </div>


   
                    </div>
                </li>
                  )
                })}
                
             
            </ul>
        </div>
    )
}

export default TodoList
