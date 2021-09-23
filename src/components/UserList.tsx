import EditableDndList, { Task } from "editable-dnd-list";
import { useState } from "react";



export function UserList(): JSX.Element {
    const[users, setUsers] = useState<Task[]>([
        {id: '1', text: "Avocado"}
    ]);
    function handleChange(items: Task[]):void{
        console.log(items);
    
    }
    return <EditableDndList items={users} onChange={handleChange} />;
} 