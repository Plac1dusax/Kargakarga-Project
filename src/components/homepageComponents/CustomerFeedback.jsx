import React from "react"
import Image from "next/image"
import styles from "../../styles/componentStyles/homepageStyles/customerFeedback.module.css"

export default function CustomerFeedback(props) {
  const { name, date, feedback, image, customBorder } = props

  return (
    <div className={styles.customer_feedback_wrapper}>
      <div className={styles.customer_feedback_header}>
        {customBorder ? (
          <div className={styles.border}>
            <Image src={image} alt="" layout="fill" />
          </div>
        ) : (
          <div className={styles.customer_image}>
            <Image src={image} alt="" layout="fill" />
          </div>
        )}
        <div className={styles.customer_nickname_and_date}>
          <h3 className={styles.customer_name}>{name}</h3>
          <p className={styles.feedback_date}>{date}</p>
        </div>
      </div>
      <p className={styles.feedback}>{feedback}</p>
    </div>
  )
}
