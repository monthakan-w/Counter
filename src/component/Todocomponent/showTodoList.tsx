// show Todo List Component
import { useTodoStore } from "../../../store/todoStore";
import { RemoveButton } from "./removeButton"; 

export function ShowTodoList() {
    const { todoList } = useTodoStore();

    return (
        <>
            <ul>
                {todoList.map((todo: string, index: number) => (
                    <li key={index} style={{ margin: "5px 0" }}>
                        {todo} <RemoveButton index={index} />
                    </li>
                ))}
            </ul>
        </>
    );
}
 