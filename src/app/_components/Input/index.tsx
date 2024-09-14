'use client'
import React, { useState } from 'react'
import { useTodoStore } from '@/app/_store/todo-store';
import { totalmem } from 'os';

export default function Input() {

    const todos = useTodoStore((state) => state.todos);
    const addAnimal = useTodoStore((state) => state.addTodo);
    const updateAnimal = useTodoStore((state) => state.updateTodo);

    const [todoName, setTodoName] = useState<string>('');

    
    const handleAddAnimal = (e : any) => {
        e.preventDefault();
        if(todoName !== ''){
            addAnimal({ id: Date.now(), name: todoName ,completed:false });
            setTodoName('')
        }
      };

    return (
        <form onSubmit={handleAddAnimal} className='flex flex-row gap-1 items-center justify-between w-full'>
            <input placeholder='Task' value={todoName} onChange={(e) => setTodoName(e.target.value)} className='w-10/12 rounded-md border-2 border-solid border-[#91788C] bg-transparent outline-none px-2'/>
            <button disabled={todoName !== '' ? false : true} type='submit' className='w-3/12 rounded-md border-2 border-solid border-[#91788C] bg-[#0F8B8D] text-white disabled:opacity-70'>
                click
            </button>
        </form>
    )
}
