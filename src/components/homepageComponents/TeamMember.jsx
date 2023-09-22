import React from "react"
import Image from "next/image"
import styles from "../../styles/componentStyles/homepageStyles/teamMember.module.css"

export default function TeamMember(props) {
  const { image, name, title } = props

  return (
    <div className={styles.team_member_wrapper}>
      <div className={styles.team_member_image}>
        <Image src={image} alt="" layout="fill" />
      </div>
      <div className={styles.team_member_information}>
        <p className={styles.team_member_name}>{name}</p>
        <p className={styles.team_member_title}>{title}</p>
      </div>
    </div>
  )
}
