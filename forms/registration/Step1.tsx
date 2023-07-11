import React from "react";
import styles from "./base.module.css";

interface MyComponentProps {}

const Step1: React.FC<MyComponentProps> = () => {
  return (
    <section className={styles.container}>
      <h1>Step 1</h1>
      <p>Step 1 content</p>
    </section>
  );
};

export default Step1;
