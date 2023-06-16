import { ListChecks, PlusCircle, Rocket } from "@phosphor-icons/react";
import nextId from "react-id-generator";

import "./App.css";

import { FormEvent, ReactElement, useState } from "react";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  let taskInput: string;

  function handleNewTask(event: React.ChangeEvent<HTMLInputElement>) {
    taskInput = event.target.value;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    createTask(taskInput);
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
          <div key={nextId()}>
            <input
              type="checkbox"
              className="li-task"
              value={task}
              name="task"
            />
            <label htmlFor="task">{task}</label>
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
              name="taskinput"
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
          <div className="all-tasks">
            <ul>{showTasks(tasks)}</ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
