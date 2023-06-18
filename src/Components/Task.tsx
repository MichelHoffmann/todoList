import { Trash } from "@phosphor-icons/react";
import { useState } from "react";
import "./Task.css";

export function Task({ task }: { task: string }) {
  const [isChecked, setIsChecked] = useState(false);

  function ChangeisChecked() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="div-input">
      <label className="container">
        <p className={isChecked ? "marked-task" : ""}>{task}</p>
        <input type="checkbox" />
        <span className="checkmark" onClick={ChangeisChecked}></span>
      </label>
      <Trash size={24} />
    </div>
  );
}
