import React from "react"
import Header from "@/components/commonComponents/Header"
import Navigation from "@/components/homepageComponents/Navigation"
import styles from "../styles/pageStyles/page.module.css"

export default function Home() {
  return (
    <div className={styles.homepage_wrapper}>
      <header className={styles.page_header}>
        <Header isHome={true} header={"kargakarga"} />
        <Navigation />
      </header>
    </div>
  )
}
