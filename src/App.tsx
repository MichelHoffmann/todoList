import { ListChecks, PlusCircle, Rocket } from "@phosphor-icons/react";
import "./App.css";

import "@phosphor-icons/react";

function App() {
  return (
    <div>
      <header className="header">
        <Rocket size={36} color="#4EA8DE" />
        <p>
          to<span>do</span>
        </p>
      </header>
      <main>
        <section className="create-task">
          <input type="text" />
          <button type="submit">
            Criar
            <PlusCircle />
          </button>
        </section>

        <section className="task">
          <div className="task-info">
            <p>Tarefas criadas</p>
            <p>Concluidas</p>
          </div>
          <div className="all-tasks">
            <ListChecks size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seu itens a fazer</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
