"use client"

import React, { useState } from "react"
import Header from "@/components/commonComponents/Header"
import Navigation from "@/components/homepageComponents/Navigation"
import Content from "@/components/homepageComponents/Content"
import "react-slideshow-image/dist/styles.css"
import { Slide } from "react-slideshow-image"
import Button from "@/components/commonComponents/Button"
import SectionHeader from "@/components/commonComponents/SectionHeader"
import services from "../data/services.json"
import Service from "@/components/homepageComponents/Service"
import Shadow from "@/components/commonComponents/Shadow"
import teamMembers from "../data/teamMembers.json"
import TeamMember from "@/components/homepageComponents/TeamMember"
import styles from "../styles/pageStyles/page.module.css"

export default function Home() {
  const [cookieRequest, setCookieRequest] = useState(true)

  const indicators = () => {
    return (
      <div className={styles.indicator}>
        <div className={styles.indicator_content}>“UARMY” Mobile Card game</div>
      </div>
    )
  }

  return (
    <div className={styles.homepage_wrapper}>
      <section className={`${styles.section} ${styles.home_section}`}>
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
        {cookieRequest ? (
          <div className={styles.cookie_request}>
            <div className={styles.cookie_request_text}>
              privacy setting — This site uses third-party website traking
              technologies to provide and continially improve our services. I
              agree and may revoke or change my consent at any time with effect
              for the future. See also our Privacy Policy and Cookies
            </div>
            <div className={styles.cookie_request_buttons}>
              <Button
                type={"cookie-deny"}
                isWide={false}
                content={"Deny"}
                setCookieRequest={setCookieRequest}
              />
              <Button
                type={"cookie-accept"}
                isWide={false}
                content={"Accept"}
                setCookieRequest={setCookieRequest}
              />
            </div>
          </div>
        ) : null}
      </section>
      <section className={`${styles.section} ${styles.section_services}`}>
        <SectionHeader header={"Our Services"} />
        <div className={styles.services_grid}>
          {services.map((service) => {
            return <Service key={service.id} {...service} />
          })}
          <div className={styles.shadow_grid_container}>
            <Shadow />
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.section_about}`}>
        <div className={styles.section_header_wrapper}>
          <SectionHeader
            header={"MANCO ART — Ukrainian Game Art Outsourcing Studio"}
          />
          <div className={styles.header_shadow}>
            <Shadow />
          </div>
          <p className={styles.header_description}>
            What does it mean? It's simple: we take over the implementation of
            your project in part or in full - from concepts to the finished art
            product. Our company employs a staff of qualified specialists in the
            field of digital drawing.
          </p>
        </div>
        <div className={styles.team_members}>
          {teamMembers.map((person) => {
            return <TeamMember key={person.id} {...person} />
          })}
        </div>
      </section>
    </div>
  )
}
