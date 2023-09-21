import React from "react"
import styles from "../../styles/componentStyles/commonComponentStyles/button.module.css"

export default function Button({ type, isWide, content }) {
  let button

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

    default:
      break
  }

  return button
}
