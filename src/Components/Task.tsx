import { Trash } from "@phosphor-icons/react";
import { useState } from "react";
import "./Task.css";

interface CommentProps {
  task: string;
  deleteTask: (content: string) => void;
  setMarkedTasks: (number: number) => VoidFunction;
}

export function Task({ task, deleteTask, setMarkedTasks }: CommentProps) {
  const [isChecked, setIsChecked] = useState(false);

  function ChangeisChecked() {
    setIsChecked(!isChecked);
    return isChecked ? setMarkedTasks(1) : (setMarkedTasks(0));
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
