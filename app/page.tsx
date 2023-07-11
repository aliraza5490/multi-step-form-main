"use client";
import StepTab from "@/components/StepTab";
import Step1 from "@/forms/registration/Step1";
import Step2 from "@/forms/registration/Step2";
import Step3 from "@/forms/registration/Step3";
import Step4 from "@/forms/registration/Step4";
import { Form, Formik } from "formik";
import { MouseEvent, useCallback, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [step, setStep] = useState(1);

  const initialValues = {
    firstName: "",
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const handleStepChange = useCallback(
    (e: MouseEvent<HTMLAnchorElement>): void => {
      e.preventDefault();
      const target = e.currentTarget;
      const step = parseInt(target.getAttribute("data-step") ?? "1");
      setStep(step);
      target.classList.add(styles.active);
    },
    []
  );

  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <ul className={styles.asideUl}>
          <li>
            <StepTab
              onClick={handleStepChange}
              step={1}
              isActive={step === 1}
            />
          </li>
          <li>
            <StepTab
              onClick={handleStepChange}
              step={2}
              isActive={step === 2}
            />
          </li>
          <li>
            <StepTab
              onClick={handleStepChange}
              step={3}
              isActive={step === 3}
            />
          </li>
          <li>
            <StepTab
              onClick={handleStepChange}
              step={4}
              isActive={step === 4}
            />
          </li>
        </ul>
      </aside>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={styles.form}>
          {/* Steps Content */}
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          <section className={styles.formNav}>
            <button>Go Back</button>
            <button>Next</button>
          </section>
        </Form>
      </Formik>
    </main>
  );
}
