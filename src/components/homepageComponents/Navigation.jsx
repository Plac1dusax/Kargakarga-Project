import React from "react"
import Button from "../commonComponents/Button"
import styles from "../../styles/componentStyles/homepageStyles/navigation.module.css"

export default function Navigation() {
  const navigation = [
    {
      content: "Projects",
      isWide: false,
      type: "navigation",
    },
    {
      content: "Services",
      isWide: false,
      type: "navigation",
    },
    {
      content: "About us",
      isWide: false,
      type: "navigation",
    },
    {
      content: "Contact us",
      isWide: false,
      type: "navigation",
    },
    {
      content: "Start a Project",
      isWide: true,
      type: "navigation",
    },
  ]

  return (
    <nav className={styles.navigation_container}>
      {navigation.map((button, index) => {
        return <Button key={index} {...button} />
      })}
    </nav>
  )
}
