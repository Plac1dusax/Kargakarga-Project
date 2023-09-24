import React from "react"
import axios from "axios"
import styles from "../../styles/componentStyles/commonComponentStyles/button.module.css"

export default function Button(props) {
  const { type, isWide, content, setCookieRequest, checkInputs } = props

  let button

  function handleDenyCookies() {
    setCookieRequest(false)
  }

  function handleAcceptCookies() {
    setCookieRequest(false)

    axios.get("http://localhost:3000/api/cookies")
  }

  switch (type) {
    case "navigation":
      button = (
        <button
          className={`${styles.button} ${styles.button_nav} ${
            isWide ? styles.button_wide : null
          }`}
        >
          <a>{content}</a>
        </button>
      )
      break
    case "homepage-content":
      button = (
        <button
          className={`${styles.button} ${styles.button_homepage_content}`}
        >
          {content}
        </button>
      )
      break
    case "cookie-deny":
      button = (
        <button
          onClick={handleDenyCookies}
          className={`${styles.button} ${styles.button_cookie_deny}`}
        >
          {content}
        </button>
      )
      break
    case "cookie-accept":
      button = (
        <button
          onClick={handleAcceptCookies}
          className={`${styles.button} ${styles.button_cookie_accept}`}
        >
          {content}
        </button>
      )
      break
    case "start-project":
      button = (
        <button className={`${styles.button} ${styles.button_start_project}`}>
          {content}
        </button>
      )
      break
    case "personal-data-agreement":
      button = (
        <button
          type="submit"
          className={`${styles.button} ${styles.button_personal_data_agreement}`}
        >
          {content}
        </button>
      )
  }

  return button
}
