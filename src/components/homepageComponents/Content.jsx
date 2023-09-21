import React from "react"
import Image from "next/image"
import Button from "../commonComponents/Button"
import styles from "../../styles/componentStyles/homepageStyles/content.module.css"

export default function Content({ index }) {
  return (
    <div className={styles.content_wrapper}>
      <div className={styles.headers}>
        <h3 className={styles.main_header}>
          We’ll embody the universe that lives in your heart
        </h3>
        <h4 className={styles.secondary_header}>
          3D, 2D, Branding and Web. Copy
        </h4>
        <Button
          type={"homepage-content"}
          isNav={false}
          isWide={false}
          content={"Join Us"}
        />
      </div>
      <div className={styles.image}>
        <div className={styles.blur_circle}></div>
        <Image src={"/images/homepageImages/coffe-cups.png"} layout="fill" />
      </div>
    </div>
  )
}
