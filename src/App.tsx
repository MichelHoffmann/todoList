import { ListChecks, PlusCircle, Rocket, Trash } from "@phosphor-icons/react";
import nextId from "react-id-generator";

import "./App.css";

import { FormEvent, ReactElement, useState } from "react";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState("");

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

  function showTasks(tasks: string[]) {
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
      return tasks.map((task) => {
        return (
          <div key={nextId()} className="div-input">
            <label className="container">
              {task}
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <Trash size={24} />
          </div>
        );
      });
    }
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
              <p className="task-counter">{tasks.length}</p>
            </div>
          </div>
          <div className="all-tasks">{showTasks(tasks)}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
