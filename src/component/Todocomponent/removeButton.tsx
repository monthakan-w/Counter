// Delete Todo List Button Component
// import { useTodoStore } from "../../store/TodoStore";
import { useTodoStore } from "../../../store/todoStore";


interface RemoveButtonProps {
    index: number;
}
export function RemoveButton( {index}:RemoveButtonProps  ) {
    const removeTodo = useTodoStore((state) => state.removeTodo);

    return (
        <button onClick={() => removeTodo(index)} style={{ marginLeft: 10, color: "red" }}>
            ลบ
        </button>
    );
}   