import React from "react"
import masonryImages from "../../data/masonryImages.json"
import Image from "next/image"
import styles from "../../styles/componentStyles/homepageStyles/masonry.module.css"

export default function Masonry() {
  return (
    <div className={styles.masonry_wrapper}>
      {masonryImages.map((image) => {
        return (
          <div
            id={`image-${image.id}`}
            className={`${styles.masonry_image}  ${
              image.isVertical ? styles.vertical : null
            }`}
          >
            <Image src={image.path} alt="" layout="fill" />
          </div>
        )
      })}
    </div>
  )
}
