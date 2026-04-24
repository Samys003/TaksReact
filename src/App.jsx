import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Estudar Programação",
      description:
        "as 15 horas do dia 24 preciso estudar react, aprender um pouco mais sobre node",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Estudar Enem",
      description:
        "hoje terei que ver alguns conceitos matematicos e montar o cronograma de biologia",
      isCompleted: true,
    },
    {
      id: 3,
      text: "dentista",
      description: "hoje as 15 horas preciso ir ao dentista fazer uma limpeza",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // validação da atualização da tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteOnTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteOnTaskClick={deleteOnTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
