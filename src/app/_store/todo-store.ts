import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Todo {
    id: number;
    name: string;
    description?: string;
    completed: boolean;
};

export type TodoList = {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    updateTodo: (id: number, newTodo: any) => void;
    deleteTodo: (id: number) => void;
};

export const useTodoStore = create<TodoList>()(
    persist(
        (set, get) => ({
            todos: [],
            addTodo: (todo) => set((state) => ({
                todos: [...state.todos, todo],
            })),
            updateTodo: (id, newTodo) => set((state) => ({
                todos: state.todos.map((todo) =>
                    todo.id === id ? { ...todo, ...newTodo } : todo
                ),
            })),
            deleteTodo: (id) => set((state) => ({
                todos: state.todos.filter((todo) => todo.id !== id)
            }))
        }),
        {
            name: 'food-storage', // name of the item in the storage (must be unique)
        },
    ),
);
