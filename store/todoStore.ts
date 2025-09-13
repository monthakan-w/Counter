// TodoList Store

// ปรับระบบงาน TodoList ให้ใช้งาน State Management: Zustand โดยแยก Component  
// - เพิ่มข้อมูล (เก็บที่ Store) 
// - ลบข้อมูล (เก็บที่ Store) 
// - แสดงผลข้อมูล (จากข้อมูล Store) 
// - Array -> Store 

import { create } from "zustand";

interface TodoInterface {
    message: string;
    todoList: string[];
    addTodo: (msg: string) => void;
    removeTodo: (index: number) => void;
    clearTodos: () => void;
}
export const useTodoStore = create<TodoInterface>((set) => ({
    message: "Todo List",
    todoList: [],

    addTodo: (msg: string) => set((state) => ({ todoList: [...state.todoList, msg] })),

    removeTodo: (index: number) => set((state) => ({ todoList: state.todoList.filter((_, i) => i !== index) })),
    
    clearTodos: () => set({ todoList: [] }),

}));


  