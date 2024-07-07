import { useState } from "react";
import styles from "./form.module.css";
import React from "react";

const getInterest = (interestRate, mortageAmount) => {
  return parseFloat((mortageAmount * interestRate) / 100);
};

const getTotal = (mortageAmount, interest) => {
  return parseFloat(mortageAmount) + parseFloat(interest);
};

const getRates = (total, mortageTerm) => {
  return parseFloat(total / mortageTerm);
};

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
  const [totalRate, setTotalRates] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const interest = getInterest(input.interestRate, input.mortgageAmount);
    const total = getTotal(input.mortgageAmount, interest);
    const totalRate = getRates(total, input.mortgageTerm);
    setTotalRates(totalRate);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form>
            <h1>Mortgage Calculator</h1>
            <button className={styles.clearAll}>Clear All</button>

            <div className={styles.amountContainer}>
              <label>Mortgage Amount</label>

              <div className={styles.spanInput}>
                <span className={styles.spanSimbol}>£</span>
                <input type="number" inputMode="numeric" onChange={(e) => handleChange(e)} id="mortgageAmount" required />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.inputGroup}>
                <label>Mortgage Term</label>
                <div className={styles.spanInputTerm}>
                  <input type="number" inputMode="numeric" onChange={(e) => handleChange(e)} id="mortgageTerm" required />
                  <span className={styles.spanSimbolTerm}>years</span>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Interest Rate</label>
                <div className={styles.spanInputRate}>
                  <input type="number" inputMode="numeric" onChange={(e) => handleChange(e)} id="interestRate" required />
                  <span className={styles.spanSimbolRate}>%</span>
                </div>
              </div>
            </div>

            <h3>Mortgage Type</h3>
            <div className={styles.radioLabel}>
              <label>Repayment</label>
              <input type="radio" name="radioBtn" onChange={(e) => handleChange(e)} id="repayment" required />
            </div>

            <div className={styles.radioLabel}>
              <label>Interest Only</label>
              <input type="radio" name="radioBtn" onChange={(e) => handleChange(e)} id="interestOnly" required />
            </div>

            <div className={styles.button}>
              <button type="button" onClick={handleCalculate}>
                <img src="icon-calculator.svg" />
                Calculate Repayments
              </button>
            </div>
          </form>
        </div>

        <div className={styles.resultContainer}>
          <h2>Your Results</h2>
          <p>
            Your results are shown below based on hte information you provided. To adjust the results, edit the form and click "calculate repayments" again.
          </p>

          <div className={styles.result}>
            <h3>Your monthly repayments</h3>
            <h1>{totalRate} £</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export { Form };
