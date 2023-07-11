import React from "react";
import styles from "./base.module.css";

interface MyComponentProps {}

const Step3: React.FC<MyComponentProps> = () => {
  return (
    <section className={styles.container}>
      <h1>Step 3</h1>
      <p>Step 3 content</p>
    </section>
  );
};

export default Step3;
