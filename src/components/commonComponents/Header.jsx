import React from "react"
import styles from "../../styles/componentStyles/commonComponentStyles/header.module.css"

export default function Header({ isHome, header }) {
  return isHome ? (
    <div className={styles.header_home_container}>
      <h1 className={styles.header}>{header}</h1>
    </div>
  ) : (
    <div className={styles.header_regular_container}>{header}</div>
  )
}
