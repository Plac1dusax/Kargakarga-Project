import React from "react"
import Image from "next/image"
import Button from "../commonComponents/Button"
import Shadow from "../commonComponents/Shadow"
import styles from "../../styles/componentStyles/homepageStyles/content.module.css"

export default function Content(props) {
  const { header, subheader, image, alt } = props

  return (
    <div className={styles.content_wrapper}>
      <div className={styles.headers}>
        <h3 className={styles.main_header}>{header}</h3>
        <h4 className={styles.secondary_header}>{subheader}</h4>
        <Button type={"homepage-content"} isWide={false} content={"Join Us"} />
      </div>
      <div className={styles.image}>
        <div className={styles.shadow_container}>
          <Shadow />
        </div>
        <Image src={image} fill alt={alt} />
      </div>
    </div>
  )
}
