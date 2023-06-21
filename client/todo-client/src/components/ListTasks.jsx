import React, {useState , useEffect} from 'react';


const ListTasks = () => {
  const [tasks , setTasks] = useState([]);
  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/tasks");
      const jsonData = await response.json();
      setTasks(jsonData)
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getTasks();
  }, [])

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        'method' : "DELETE"
      })
      const jsonData = await response.json();
      getTasks();
    } catch (err) {
      console.error(err.message);
    }
  }
  console.log(tasks)
  return (
    <>
    <ul role="list" className="divide-y divide-gray-100">
      {tasks.map((task) => (
        <li className="flex justify-between items-center gap-x-6 py-5">
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-lg font-semibold leading-6 text-white">{task.description}</p>
            </div>
          </div>
          <div className="hidden sm:flex gap-4 sm:items-end">
            <button className="text-sm leading-6 bg-green-500 text-white">Edit</button>
            <button data-key={task.todo_id} onClick={ () => deleteTask(task.todo_id) } className="text-sm bg-red-500 leading-6 text-white">delete</button>
          </div>
        </li>
      ))}
    </ul>
    </>
    
  )
}

export default ListTasks;
