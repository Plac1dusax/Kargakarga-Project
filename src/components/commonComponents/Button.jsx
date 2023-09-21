import React from "react"
import styles from "../../styles/componentStyles/commonComponentStyles/button.module.css"

export default function Button({ isNav, isWide, content }) {
  return isNav ? (
    <button
      className={`${styles.button} ${styles.button_nav} ${
        isWide ? styles.button_wide : null
      }`}
    >
      <a>{content}</a>
    </button>
  ) : (
    <button>{content}</button>
  )
}
