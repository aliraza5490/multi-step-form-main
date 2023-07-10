import React from "react";

interface MyComponentProps {
  step: number;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const StepTab: React.FC<MyComponentProps> = ({ step, onClick }) => {
  return (
    <a href="#" onClick={onClick} data-step={step}>
      Step 2
    </a>
  );
};

export default StepTab;
