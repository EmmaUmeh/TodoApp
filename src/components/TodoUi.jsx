import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newtodo, deletetodo, edittodo } from '../actions/Createtodo';
import {FaRegEdit} from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoUi = () => {
    const [createTodo, setCreateTodo] = useState('');
    // const [deleteTodo, setDeleteTodo] = useState('');

    const dispatch = useDispatch();
    const todoItems = useSelector(state => state.todoitems.todoitems);

// this function handles the add todo
    const handleChange = (e) => {
        e.preventDefault();

        if (createTodo) {
            // Dispatch the newtodo action with the createTodo value as payload
            dispatch(newtodo(createTodo));
            // Clear the input field after dispatching
            setCreateTodo('');
            toast.success("Todo created successfully")
        } else {
            console.log("Invalid Name");
            toast.error("Todo not created            ")
        }
    };

 
    const deleteTodo = (index, newValue) => {
        dispatch(deletetodo(index, newValue)); 
        toast.success("Todo deleted successfully")
    }

    
    const editTodo = (index, newValue) => { // Define the editTodo function
        dispatch(edittodo(index, newValue)); // Dispatch the 'EDIT_ITEM' action with the index and new value
        toast.success("Todo edited successfully")
    }

    return (
        <>
            <div className="flex justify-center relative top-20">
                <div className="bg-[#5570F1] py-10 px-10 rounded-md">
                    <h3 className="text-[#fff] text-2xl mb-10">What's the plan for today?</h3>

                    {/* Form inputs */}
                    <div className="flex mb-10">
                        <input
                            type="text"
                            placeholder="Enter your day-to-day task"
                            className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-l-lg py-2 pl-2 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            value={createTodo}
                            onChange={(e) => setCreateTodo(e.target.value)}
                        />
                        <button
                            onClick={handleChange}
                            className="bg-[#121212] text-sm text-[#fff] py-2 px-2 rounded-r-lg"
                        >
                            Add Todo
                        </button>
                    </div>

                    <div className="">
                        {todoItems.map((item, index) => (
                            <div key={index} className="bg-[#121212] rounded-md py-1 px-2 mb-2">
                                {/* Moved the div with key inside the map function */}
                                <div className="text-white flex justify-between">
                                    {item}
                                    <div className="flex">
                                        <FaRegEdit
                                            size={20}
                                            className="cursor-pointer"
                                            onClick={() => {
                                                const newValue = prompt("Edit the todo:", item);
                                                if (newValue !== null && newValue !== "") {
                                                    editTodo(index, newValue);
                                                }
                                            }}
                                        />
                                        <AiOutlineDelete size={20} className="ml-2 cursor-pointer" onClick={() => deleteTodo(index)} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default TodoUi;
