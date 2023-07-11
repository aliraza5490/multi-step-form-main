import classNames from "classnames";
import React from "react";
import styles from "./StepTab.module.css";

interface MyComponentProps {
  step: number;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  isActive: Boolean;
}

const StepTab: React.FC<MyComponentProps> = ({ step, onClick, isActive }) => {
  return (
    <a href="#" onClick={onClick} data-step={step} className={styles.tab}>
      <div className={classNames(styles.circle, { [styles.active]: isActive })}>
        {step}
      </div>
    </a>
  );
};

export default StepTab;
