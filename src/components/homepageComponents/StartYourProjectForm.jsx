import React, { useState, useRef } from "react"
import Button from "../commonComponents/Button"
import axios from "axios"
import styles from "../../styles/componentStyles/homepageStyles/startYourProjectForm.module.css"

export default function StartYourProjectForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [personalDataAgreement, setPersonalDataAgreement] = useState(false)
  const [nameErrors, setNameErrors] = useState([])
  const [emailErrors, setEmailErrors] = useState([])
  const [messageErrors, setMessageErrors] = useState([])
  const [personalDataAgreementErrors, setPersonalDataAgreementErrors] =
    useState([])

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)
  const personalDataAgreementRef = useRef(null)

  function handleFormSubmit(e) {
    e.preventDefault()

    const nameResults = checkName(name)
    const emailResults = checkEmail(email)
    const messageResults = checkMessage(message)
    const personalDataAgreementResults = checkPersonalDataAgreement(
      personalDataAgreement
    )

    setNameErrors(nameResults)
    setEmailErrors(emailResults)
    setMessageErrors(messageResults)
    setPersonalDataAgreementErrors(personalDataAgreementResults)

    if (
      nameResults.length <= 0 &&
      emailResults.length <= 0 &&
      messageResults.length <= 0 &&
      personalDataAgreementResults
    ) {
      const newProject = { name, email, message }

      axios.post("http://localhost:3000/api/newProjects", {
        newProject,
      })

      setName("")
      setEmail("")
      setMessage("")
      setPersonalDataAgreement(false)

      nameRef.current.value = ""
      emailRef.current.value = ""
      messageRef.current.value = ""
      personalDataAgreementRef.current.checked = false
    }
  }

  function handlePersonalDataAgreement(e) {
    setPersonalDataAgreement(e.target.checked)
  }

  function checkName(name) {
    const errors = []

    if (name.length === 0) {
      errors.push("The name cannot be shorter than 6 letters")
    }

    return errors
  }

  function checkEmail(email) {
    const errors = []

    if (email.length === 0) {
      errors.push("Email cannot be empty")
    }

    if (!email.includes("@")) {
      errors.push('Email is not valid, it should include "@"')
    }

    return errors
  }

  function checkMessage(message) {
    const errors = []

    if (message.length === 0) {
      errors.push("Message cannot be empty")
    }

    return errors
  }

  function checkPersonalDataAgreement(personalDataAgreement) {
    const errors = []

    if (!personalDataAgreement) {
      errors.push("Our personal data agreement should be accepted")
    }

    return errors
  }

  return (
    <form onSubmit={handleFormSubmit} className={styles.form_wrapper}>
      <input
        className={styles.form_input}
        ref={nameRef}
        id="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        defaultValue={name}
        placeholder="How can I contact you?"
      />
      <input
        className={styles.form_input}
        ref={emailRef}
        id="email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        defaultValue={email}
        placeholder="Phone/email"
      />
      <input
        className={styles.form_input}
        ref={messageRef}
        id="message"
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        defaultValue={message}
        placeholder="Add a message"
      />
      <div className={styles.personal_data_agreement}>
        <input
          onClick={handlePersonalDataAgreement}
          ref={personalDataAgreementRef}
          className={styles.access_personal_data_checkbox}
          id="checkbox"
          defaultChecked={personalDataAgreement}
          type="checkbox"
        />
        <label className={styles.access_personal_data_label} htmlFor="checkbox">
          I agree to the processing of personal data.
        </label>
      </div>
      {nameErrors.length > 0 ||
      emailErrors.length > 0 ||
      messageErrors.length > 0 ||
      personalDataAgreementErrors > 0 ? (
        <div>
          <ul className={styles.error_list}>
            {nameErrors.map((error, index) => {
              return (
                <li className={styles.error} key={index}>
                  {error}
                </li>
              )
            })}
            {emailErrors.map((error, index) => {
              return (
                <li className={styles.error} key={index}>
                  {error}
                </li>
              )
            })}
            {messageErrors.map((error, index) => {
              return (
                <li className={styles.error} key={index}>
                  {error}
                </li>
              )
            })}
            {personalDataAgreementErrors.map((error, index) => {
              return (
                <li className={styles.error} key={index}>
                  {error}
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}

      <Button
        type={"personal-data-agreement"}
        isWide={false}
        content={"Send"}
      />
    </form>
  )
}
