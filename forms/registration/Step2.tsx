import React from "react";
import styles from "./base.module.css";

interface MyComponentProps {}

const Step2: React.FC<MyComponentProps> = () => {
  return (
    <section className={styles.container}>
      <h1>Step 2</h1>
      <p>Step 2 content</p>
    </section>
  );
};

export default Step2;
