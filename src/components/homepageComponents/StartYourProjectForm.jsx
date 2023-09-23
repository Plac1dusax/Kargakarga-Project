import React from "react"
import Button from "../commonComponents/Button"
import styles from "../../styles/componentStyles/homepageStyles/startYourProjectForm.module.css"

export default function StartYourProjectForm() {
  return (
    <form className={styles.form_wrapper}>
      <input
        className={styles.form_input}
        id="name"
        type="text"
        placeholder="How can I contact you?"
      />
      <input
        className={styles.form_input}
        id="email"
        type="email"
        placeholder="Phone/email"
      />
      <input
        className={styles.form_input}
        id="message"
        type="text"
        placeholder="Add a message"
      />
      <div className={styles.personal_data_agreement}>
        <input
          className={styles.access_personal_data_checkbox}
          id="checkbox"
          type="checkbox"
        />
        <label className={styles.access_personal_data_label} htmlFor="checkbox">
          I agree to the processing of personal data.
        </label>
      </div>
      <Button
        type={"personal-data-agreement"}
        isWide={false}
        content={"Send"}
      />
    </form>
  )
}
