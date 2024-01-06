
import React, { useState } from 'react'
import './todolist.css'

function Todoapp() {
    let [list, setlist] = useState([])
    let [inputText, setinputText] = useState('')
    const [editIndex, setEditIndex] = useState(null);
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");

    // let getInput =(e)=>{
    //     setInputtext(e.target.value)
    //     console.log(e.target.value)
    // }



    // if (editIndex !== null) {
    //     const updateTodos = [...todos];
    //     updateTodos[editIndex] = value;
    //     setTodos(updateTodos);
    //     setEditIndex(null);
    //   } else {
    //     setTodos([...todos, value]);
    //   }

    //   setValue("");






    function updateText(e) {
        setinputText(e.target.value)
       
    }






    function additem() {
        if(inputText===""){
            alert('enter value in the field')
        }else{
        let copylist = [...list]
        copylist.push(inputText)
        setlist(copylist)
        setinputText("");
        setValue("")
        }
    }

    function deleteall() {
        setlist([])
    }
    function indexfunction(e) {
        var copylist = [...list]
        copylist.splice(e, 1)
        setlist(copylist)
    }


    // const editTodo = (index) => {
    //     setEditIndex(index);
    //     setValue(todos[index]);
    //   }




    return (
        <div className='main'>
            <h1>Todo App</h1>
            <br />
            <section className="input">
                <div className="form-floating mb-3">
                    <input onChange={updateText} type="text" className="form-control" placeholder='write something here..' />
                </div>
                <div>
                    <button onClick={additem} className='btn btn-primary'>{editIndex !== null ? 'Edit Todo' : 'Add Item'}</button>
                    <button onClick={deleteall} className='btn btn-danger'>Delete All </button>
                </div>

                <div className="todolist">
                    


                        {
                            list.map((value, index) => {
                                return <div className="editsite">

                                    <div className='li' key={index}>{value}</div>
                                    <div className='btn'>
                                        <button className='btn btn-danger' onClick={() => indexfunction(index)}
                                        > <ion-icon name="close-circle-outline"></ion-icon></button>
                                        <button className='btn btn-primary'><ion-icon name="create-outline"></ion-icon></button>
                                    </div>

                                </div>
                            })
                        }


                    
                </div>
            </section>
            <div>



            </div>






        </div>
    )
}

export default Todoapp