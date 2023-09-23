import React from "react"
import styles from "../../styles/componentStyles/commonComponentStyles/button.module.css"

export default function Button(props) {
  const { type, isWide, content, setCookieRequest } = props

  let button

  function handleDenyCookies() {
    setCookieRequest(false)
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
        <button className={`${styles.button} ${styles.button_cookie_accept}`}>
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
