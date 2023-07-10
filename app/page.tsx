"use client";
import { MouseEvent, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [step, setStep] = useState(1);

  const handleStepChange = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    const step = parseInt(target.getAttribute("data-step") || "1");
    setStep(step);
    target.classList.add(styles.active);
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

      {/* Step: 1 */}
      {step === 1 && (
        <section>
          <h1>Step 1</h1>
          <p>Step 1 content</p>
        </section>
      )}

      {/* Step: 2 */}
      {step === 2 && (
        <section>
          <h1>Step 2</h1>
          <p>Step 2 content</p>
        </section>
      )}

      {/* Step: 3 */}
      {step === 3 && (
        <section>
          <h1>Step 3</h1>
          <p>Step 3 content</p>
        </section>
      )}

      {/* Step: 4 */}
      {step === 4 && (
        <section>
          <h1>Step 4</h1>
          <p>Step 4 content</p>
        </section>
      )}
    </main>
  );
}
