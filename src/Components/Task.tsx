import { Trash } from "@phosphor-icons/react";
import './Task.css'

export function Task({ task }: { task: string }) {
  return (
    <div className="div-input">
      <label className="container">
        {task}
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <Trash size={24} />
    </div>
  );
}
