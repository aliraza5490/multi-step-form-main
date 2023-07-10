import React from "react";

interface MyComponentProps {}

const Step1: React.FC<MyComponentProps> = () => {
  return (
    <section>
      <h1>Step 1</h1>
      <p>Step 1 content</p>
    </section>
  );
};

export default Step1;
