// ปรับระบบงาน TodoList ให้ใช้งาน State Management: Zustand โดยแยก Component  
// - เพิ่มข้อมูล (เก็บที่ Store) 
// - ลบข้อมูล (เก็บที่ Store) 
// - แสดงผลข้อมูล (จากข้อมูล Store) 
// - Array -> Store 



// import { useTodoStore } from "../../store/TodoStore";


// export function TodoForm() {
//     const addTodo = useTodoStore((state) => state.addTodo);
//     const [newTodo, setNewTodo] = useState<string>("");
// } 

// function TodoApp() { 
//     const [task, setTask] = useState<string>("");        // เก็บค่าที่พิมพ์ใน input 
//     const [tasks, setTasks] = useState<string[]>([]);   // เก็บรายการงานทั้งหมด
        
//     const addTask = () => { 
//         if (task.trim() === "") return;            // กัน input ว่าง 
//         setTasks([...tasks, task]);                // เพิ่ม task ลงใน array 
//         setTask("");                               // เคลียร์ input หลังเพิ่ม 
//     }; 

//     {/* เพิ่มปุ่มลบรายการ และ Function การลบรายการ  */}
//     const deleteTask = (index: number) => { 
//         // เก็บรายการที่ index ไม่ตรงกับอันที่ต้องการลบ 
//         const newTasks = tasks.filter((_, i) => i !== index); 
//         setTasks(newTasks); 
//     }; 
 

//     return ( 
//         // compo การเพิ่ม
//         <div style={{ textAlign: "center", marginTop: "50px" }}> 

//             <h1>My To-do List</h1> 

//             <input 
//                 type="text" 
//                 value={task} 
//                 onChange={(e) => setTask(e.target.value)} 
//                 placeholder="พิมพ์งานที่ต้องทำ..." 
//             /> 
//             <button onClick={addTask}>Add</button> 

//             <ul style={{ listStyle: "none", padding: 0 }}> 
//                 {tasks.map((t, index) => ( 
//                     <li key={index} style={{ margin: "5px 0" }}> 
//                         {t} 

//                         {/* เพิ่มปุ่มลบรายการ และ Function การลบรายการ  com ลบ */}
//                          <button 
//                             onClick={() => deleteTask(index)} 
//                             style={{ marginLeft: 10, color: "red" }} 
//                         > 
//                             ลบ 
//                         </button> 
                        
//                     </li> 
//                 ))} 
//             </ul> 
//         </div> 
//     ); 
// } 


// export default TodoApp; 


 // Todo List Add Form
import { useState } from "react";
import { useTodoStore } from "../../../store/todoStore";


 export function TodoForm() {
        const addTodo = useTodoStore((state) => state.addTodo);
        const [newTodo, setNewTodo] = useState("");

        const handleSubmit = (e:any) => {
            e.preventDefault();
            if (newTodo.trim()) { 
                addTodo(newTodo);
                setNewTodo("");}
        };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add Todo</button>
            </form>
        </>
    );
}