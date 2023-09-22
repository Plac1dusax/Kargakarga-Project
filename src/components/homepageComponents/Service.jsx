import React from "react"
import Image from "next/image"
import styles from "../../styles/componentStyles/homepageStyles/service.module.css"

export default function Service(props) {
  const { header, image, description } = props

  return (
    <div className={styles.service_wrapper}>
      <h3 className={styles.service_header}>{header}</h3>
      <div className={styles.service_image}>
        <Image src={image} alt="" layout="fill" />
      </div>
      <p className={styles.service_description}>{description}</p>
    </div>
  )
}
