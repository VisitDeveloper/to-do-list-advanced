'use client'
import { Todo, TodoList, useTodoStore } from '@/app/_store/todo-store';
import { RecordCircle, TickCircle, Trash } from 'iconsax-react'
import React from 'react'

export default function List() {
    const todos = useTodoStore((state: TodoList) => state.todos);
    const updateTodo = useTodoStore((state) => state.updateTodo);
    const deleteTodo = useTodoStore((state) => state.deleteTodo)

    const handleUpdateTodo = (ID: any, currentCompleted: boolean) => {
        updateTodo(ID, {
            completed: !currentCompleted,
        });
    }

    const deleteItem = (ID: number) => {
        deleteTodo(ID)
    }

    return (
        <div className="h-10/12 w-full rounded-md overflow-auto mt-2">
            {todos.length !== 0 ? todos.map((todo: Todo) => {
                return (
                    <div className="flex flex-row justify-between items-center border-2 border-solid mb-2 border-[#AC9AA8] p-1 rounded-md">
                        <div className="flex flex-row gap-1 items-center">
                            {todo.completed === true ?
                                <TickCircle size="16" color='#0A5B5C' className='cursor-pointer' onClick={() => handleUpdateTodo(todo.id, todo.completed)} />
                                :
                                <RecordCircle size="16" className='cursor-pointer' onClick={() => handleUpdateTodo(todo.id, todo.completed)} />
                            }
                            <span className={`${todo.completed === true ? 'line-through' : '' }`}>
                                {todo.name}
                            </span>
                        </div>
                        <div>
                            <Trash size="20" color="black" className="cursor-pointer" onClick={() => deleteItem(todo.id)} />
                        </div>
                    </div>
                )
            }) : <>Thers is no task</>}






        </div>
    )
}
