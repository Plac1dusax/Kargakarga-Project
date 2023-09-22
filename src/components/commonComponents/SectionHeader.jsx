import React from "react"
import styles from "../../styles/componentStyles/commonComponentStyles/sectionHeader.module.css"

export default function SectionHeader({ header }) {
  return <div className={styles.section_header}>{header}</div>
}
