import React from 'react'
import { useState } from 'react'
import "./Form.css"
import Item from './Item'
import { v4 as uuidv4 } from 'uuid';


export default function Form() {
    const [dataArr, setDataArr] = useState([
        {txt: "Sport", id: uuidv4()},
        {txt: "Promener le chien", id: uuidv4()},
        {txt: "Coder", id: uuidv4()},
    ])
    const deleteElement = (id) => {
        console.log(id);
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState)
    }
    return(
        <>
            <div className='form-todo-container'>
                Form

                <form className='form-todo'>
                <label htmlFor="todo">Choses à faire</label>
                <input type="text" className='label-todo' />
                <button className='button-todo'>Ajouter</button>
                </form>
                <h2>Liste des choses à faire :</h2>
                <ul className='list-task-todo-container'>
                    {dataArr.map((item) => {
                        return (
                            <Item
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            delFunc= {deleteElement}
                            />
                        )
                    })}
                </ul>
            </div>
        </>
    )
}