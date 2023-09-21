import React from "react"
import Button from "../commonComponents/Button"
import styles from "../../styles/componentStyles/homepageStyles/navigation.module.css"

export default function Navigation() {
  const navigation = [
    {
      content: "Projects",
      isWide: false,
    },
    {
      content: "Services",
      isWide: false,
    },
    {
      content: "About us",
      isWide: false,
    },
    {
      content: "Contact us",
      isWide: false,
    },
    {
      content: "Start a Project",
      isWide: true,
    },
  ]

  return (
    <nav className={styles.navigation_container}>
      {navigation.map((button, index) => {
        return <Button key={index} isNav={true} {...button} />
      })}
    </nav>
  )
}
