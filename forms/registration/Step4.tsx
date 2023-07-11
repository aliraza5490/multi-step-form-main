import React from "react";
import styles from "./base.module.css";

interface MyComponentProps {}

const Step4: React.FC<MyComponentProps> = () => {
  return (
    <section className={styles.container}>
      <h1>Step 4</h1>
      <p>Step 4 content</p>
    </section>
  );
};

export default Step4;
