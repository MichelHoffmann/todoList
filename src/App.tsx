import { ListChecks, PlusCircle, Rocket } from "@phosphor-icons/react";
import "./App.css";

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  setTasks(...tasks, "jhvjv");

  function showTasks(tasks) {
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
        return <li>{task}</li>;
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
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar
            <PlusCircle />
          </button>
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
