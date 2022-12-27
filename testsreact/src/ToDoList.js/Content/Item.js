import React from 'react'
import "./Item.css"

export default function Item(props) {
  return (
    
    <li className='list-task-todo'>
        <div className=""></div>
        <button
        onClick={() => props.delFunc(props.id)}
        >
            Supprimer</button>
    </li>
  )
}