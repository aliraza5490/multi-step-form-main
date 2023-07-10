"use client";
import Step1 from "@/forms/registration/Step1";
import Step2 from "@/forms/registration/Step2";
import Step3 from "@/forms/registration/Step3";
import Step4 from "@/forms/registration/Step4";
import { MouseEvent, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [step, setStep] = useState(1);

  const handleStepChange = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    const step = parseInt(target?.getAttribute("data-step") ?? "1");
    setStep(step);
    target?.classList.add(styles.active);
  };

  return (
    <main className={styles.main}>
      <aside>
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <a href="#" onClick={handleStepChange} data-step={1}>
                Step 1
              </a>
            </li>
            <li>
              <a href="#" onClick={handleStepChange} data-step={2}>
                Step 2
              </a>
            </li>
            <li>
              <a href="#" onClick={handleStepChange} data-step={3}>
                Step 3
              </a>
            </li>
            <li>
              <a href="#" onClick={handleStepChange} data-step={3}>
                Step 4
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Steps */}
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
    </main>
  );
}
