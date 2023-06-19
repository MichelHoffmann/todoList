import { Trash } from "@phosphor-icons/react";
import { useState } from "react";
import "./Task.css";

interface CommentProps {
  task: string;
  deleteTask: (content: string) => void;
}

export function Task({ task, deleteTask }: CommentProps) {
  const [isChecked, setIsChecked] = useState(false);

  function ChangeisChecked() {
    setIsChecked(!isChecked);
  }

  function deleteThisTask() {
    deleteTask(task);
  }

  return (
    <div className="div-input">
      <label className="container">
        <p className={isChecked ? "marked-task" : ""}>{task}</p>
        <input type="checkbox" />
        <span className="checkmark" onClick={ChangeisChecked}></span>
      </label>
      <Trash size={24} className="trash" onClick={deleteThisTask} />
    </div>
  );
}
