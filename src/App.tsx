import { PlusCircle, Rocket, ListChecks } from "@phosphor-icons/react";
import nextId from "react-id-generator";

import "./App.css";

import { FormEvent, useState } from "react";
import { Task } from "./Components/Task";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const markedTasks = 0;

  function handleNewTask(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskInput(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    createTask(taskInput);
    setTaskInput("");
  }

  function createTask(task: string) {
    setTasks([...tasks, task]);
  }

  function deleteTask(content: string) {
    const undeletedTasks = tasks.filter((task) => {
      return task != content;
    });
    setTasks(undeletedTasks);
  }

  return (
    <div>
      <header className="header">
        <Rocket size={36} color="#4EA8DE" />
        <p>
          to<span>do</span>
        </p>
      </header>
      <main>
        <section className="create-task wrapper">
          <form>
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              onChange={handleNewTask}
              value={taskInput}
              id="taskInput"
            />
            <button type="submit" onClick={handleSubmit}>
              Criar
              <PlusCircle />
            </button>
          </form>
        </section>

        <section className="task wrapper">
          <div className="task-info">
            <div className="task-info-sub">
              <p>Tarefas criada</p>
              <p className="task-counter">{tasks.length}</p>
            </div>
            <div className="task-info-sub">
              <p>Concluidas</p>
              <p className="task-counter">
                {markedTasks} de {tasks.length}
              </p>
            </div>
          </div>
          <div className="all-tasks">
            {tasks.map((task) => {
              if (tasks.length === 0) {
                return (
                  <div>
                    <ListChecks size={56} color="#262626" />
                    <p>
                      <strong>Você ainda não tem tarefas cadastradas </strong>
                      <br />
                      Crie tarefas e organize seu itens a fazer
                    </p>
                  </div>
                );
              } else {
                return (
                  <Task key={nextId()} task={task} deleteTask={deleteTask} />
                );
              }
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
