import { useState, type ReactNode } from "react";
import style from "./ControlsWrapper.module.css";
import { combine } from "../../lib/util";

export function ControlsWrapper({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(true);

  console.log("collapsed", collapsed);

  return (
    <div className={combine(style.wrapper, collapsed ? style.collapsed : "")}>
      <button
        onClick={() => setCollapsed((prev) => !prev)}
        className={style.collapseButton}
      >
        {collapsed ? "↑" : "↓"}
      </button>
      <div className={style.main}>{children}</div>
    </div>
  );
}
