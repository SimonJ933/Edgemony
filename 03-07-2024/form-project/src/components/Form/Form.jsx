import styles from "./form.module.css";
import { useState } from "react";
import React from "react";

function Form() {
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
    generalEnquiry: "",
    supportRequest: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.id;
    setInput({ ...input, [name]: value });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1>Contact Us</h1>
          <form>
            <div className={styles.namesContainer}>
              <div className={styles.inputGroup}>
                <label>First Name *</label>
                <input onChange={(e) => handleChange(e)} type="text" id="name" required />
              </div>

              <div className={styles.inputGroup}>
                <label>Last Name *</label>
                <input onChange={(e) => handleChange(e)} type="text" id="lastName" required />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Email Adress *</label>
              <input onChange={(e) => handleChange(e)} type="email" id="email" required />
            </div>

            <div className={styles.inputGroupQuery}>
              <label>Query Type *</label>
              <div classname={styles.radioGroupQuery}>
                <input onChange={(e) => handleChange(e)} type="checkbox" id="generalEnquiry" required />
                <label>General Enquiry</label>

                <input onChange={(e) => handleChange(e)} type="checkbox" id="supportRequest" required />
                <label>Support Request</label>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Message *</label>
              <input className={styles.message} type="message" id="message" onChange={(e) => handleChange(e)} />
            </div>

            <button className={styles.submit} type="submit">
              Submit
            </button>

            <div className={styles.inputGroupTerms}>
              <label>I consent to being contacted by the team</label>
              <input className={styles.terms} type="checkbox" id="terms" />
            </div>
          </form>
        </div>

        <div className={styles.mirror}>
          <h2>Name</h2>
          <h3>{input.name}</h3>

          <h2>Last Name</h2>
          <h3>{input.lastName}</h3>

          <h2>Email</h2>
          <h3>{input.email}</h3>

          <h2>Message</h2>
          <h3>{input.message}</h3>
        </div>
      </div>
    </>
  );
}

export { Form };
