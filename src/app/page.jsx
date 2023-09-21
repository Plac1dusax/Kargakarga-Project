"use client"

import React from "react"
import Header from "@/components/commonComponents/Header"
import Navigation from "@/components/homepageComponents/Navigation"
import Content from "@/components/homepageComponents/Content"
import "react-slideshow-image/dist/styles.css"
import { Slide } from "react-slideshow-image"
import styles from "../styles/pageStyles/page.module.css"

export default function Home() {
  const indicators = (index) => {
    return (
      <div className={styles.indicator}>
        <div className={styles.indicator_content}>“UARMY” Mobile Card game</div>
      </div>
    )
  }

  return (
    <div className={styles.homepage_wrapper}>
      <header className={styles.page_header}>
        <Header isHome={true} header={"kargakarga"} />
        <Navigation />
      </header>
      <div className={styles.contents_container}>
        <Slide indicators={indicators}>
          <Content />
          <Content />
          <Content />
          <Content />
        </Slide>
      </div>
    </div>
  )
}
