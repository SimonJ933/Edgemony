import { useState } from "react";
import styles from "./form.module.css";
import React from "react";

function Form() {
  const [input, setInput] = useState({
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
    repayment: "",
    interestOnly: "",
    calculate: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.id;
    setInput({ ...input, [name]: value });
  };
  const [result, setResult] = useState(0);
  const handleCalculate = () => {
    const sum = parseFloat(input.mortgageAmount) + parseFloat(input.mortgageTerm) + parseFloat(input.interestRate);
    setResult(sum);

    if (isNaN(result)) {
      setResult(0);
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form>
          <h1>Mortgage Calculator</h1>
          <button className={styles.clearAll}>Clear All</button>
          <div className={styles.amountContainer}>
            <label>Mortgage Amount</label>
            <input type="text" onChange={(e) => handleChange(e)} id="mortgageAmount" required />
          </div>

          <div className={styles.termRateContainer}>
            <div className={styles.termContainer}>
              <label>Mortgage Term</label>
              <input type="text" onChange={(e) => handleChange(e)} id="mortgageTerm" required />
            </div>

            <div className={styles.rateContainer}>
              <label>Interest Rate</label>
              <input type="text" onChange={(e) => handleChange(e)} id="interestRate" required />
            </div>
          </div>

          <div className={styles.mortgageTypeContainer}>
            <p>Mortgage Type</p>
            <div className={styles.radioContainer}>
              <div className={styles.radioLabel}>
                <label>Repayment</label>
                <input type="radio" name="radioBtn" onChange={(e) => handleChange(e)} id="repayment" required />
              </div>
            </div>

            <div className={styles.radioContainer}>
              <div className={styles.radioLabel}>
                <label>Interest Only</label>
                <input type="radio" name="radioBtn" onChange={(e) => handleChange(e)} id="interestOnly" required />
              </div>
            </div>
          </div>

          <div className={styles.button}>
            <button type="button" onClick={handleCalculate}>
              <img src="icon-calculator.svg" />
              Calculate Repayments
            </button>
          </div>

          <div className={styles.resultContainer}>
            <h2>Your Results</h2>
            <p>
              Tour results are shown below based on hte information you provided. To adjust the results, edit the form and click "calculate repayments" again.
            </p>

            <div className={styles.result}>
              <h3>Your monthly repayments</h3>
              <h1>{result} £</h1>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export { Form };
