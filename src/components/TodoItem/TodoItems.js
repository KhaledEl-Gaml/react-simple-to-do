import React from 'react';
import './TodoItems.css';
function TodoItems({ items, deleteItem }) {
  const length = items.length;
  const listItems = length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
            <span className='name'>{item.todo}</span>
            <span className='age'>{item.hr}</span>
            <span className='action icon' onClick={()=>deleteItem(item.id)}>&times;</span>
     
        </div>
      );
    })
  ) : (
    <p>There is no Items To Remove</p>
  )
  return (
    <div className="ListItem">
      <div>
        <span className='title name'>TODO</span>
        <span className='title age'>HOUR</span>
        <span className='title action'>Action</span>
      </div>
      {listItems}
    </div>
  );
}

export default TodoItems;
