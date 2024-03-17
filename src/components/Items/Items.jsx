import React from 'react'
import { FaTrash } from "react-icons/fa6";
import './Items.component.css'

const Items = ({ item , onCheckBoxChange, onDeleteClick}) => {
  return (
    <div>
      <div className="list-items" key={item.id}>
              <div>
              <input
                  className='input-checkbox'
                type="checkbox"
                checked={item.checked}
                onChange={() => onCheckBoxChange(item.id)}
              />
              <label className='input-label'
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.item}
              </label>
              </div>
             
              <FaTrash
              role="button"
              tabIndex="0"
                onClick={() => onDeleteClick(item.id)}
                aria-label={`Delete ${item.item}`}  
            />
            </div>
            
    </div>
  )
}

export default Items
