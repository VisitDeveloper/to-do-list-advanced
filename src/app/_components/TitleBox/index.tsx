'use client'
import { TodoList, useTodoStore } from '@/app/_store/todo-store';
import { TaskSquare } from 'iconsax-react'
import React from 'react'

function HeaderTitle() {
    const todos = useTodoStore((state: TodoList) => state.todos);

    return (
        <div className="flex flex-row justify-between items-center w-full">
            <div className='flex flex-row gap-2 '>
                <TaskSquare size="25" color="black" />
                <p className="text-black">Task List</p>
            </div>
            <div>
                {todos.length}
            </div>
        </div>
    )
}
export default HeaderTitle