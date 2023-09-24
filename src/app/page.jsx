"use client"

import React, { useEffect, useState } from "react"
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
import customerFeedbacks from "../data/customerFeedbacks.json"
import Image from "next/image"
import CustomerFeedback from "@/components/homepageComponents/CustomerFeedback"
import FAQ from "@/components/homepageComponents/FAQ"
import fAQ from "../data/fAQ.json"
import Masonry from "@/components/homepageComponents/Masonry"
import StartYourProjectForm from "@/components/homepageComponents/StartYourProjectForm"
import { AiOutlineInstagram } from "react-icons/ai"
import { BiLogoLinkedin } from "react-icons/bi"
import { BsTwitter } from "react-icons/bs"
import home from "../data/home.json"
import styles from "../styles/pageStyles/page.module.css"

export default function Home() {
  const [cookieRequest, setCookieRequest] = useState(true)
  const [clickedQuestion, setClickedQuestion] = useState()
  const [pageWidth, setPageWidth] = useState(window.innerWidth)

  useEffect(() => {
    const pageWidth = () => {
      setPageWidth(window.innerWidth)
    }
    window.addEventListener("resize", pageWidth)

    return () => {
      window.removeEventListener("resize", pageWidth)
    }
  }, [])

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
          <Slide arrows={false} indicators={indicators}>
            {home.map((content, index) => {
              return <Content key={index} {...content} />
            })}
          </Slide>
        </div>
        <div
          className={
            cookieRequest
              ? `${styles.cookie_request} ${styles.cookie_request_active} `
              : `${styles.cookie_request} ${styles.cookie_request_inactive} `
          }
        >
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
        <div
          className={`${styles.section_header_wrapper} ${styles.about_header}`}
        >
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
      <section className={`${styles.section} ${styles.section_feedback}`}>
        <div className={styles.section_header_wrapper}>
          <SectionHeader header={"Customer Feedback"} />
          <div className={styles.header_shadow_feedbacks}>
            <Shadow />
          </div>
        </div>
        <div className={styles.customer_feedbacks_container}>
          <Slide
            arrows={false}
            slidesToShow={pageWidth > 1080 ? 2 : 1}
            autoplay={false}
          >
            {customerFeedbacks.map((feedback) => {
              return <CustomerFeedback key={feedback.id} {...feedback} />
            })}
          </Slide>
        </div>
        {pageWidth > 500 ? (
          <div className={styles.start_the_project_container}>
            <div className={styles.start_the_project_flex}>
              <div className={styles.start_the_project_content}>
                <h3 className={styles.start_the_project_header}>
                  Hey! You can send us a message to start working on the project
                </h3>
                <div
                  className={styles.start_the_project_button_and_information}
                >
                  <Button
                    type={"start-project"}
                    isWide={false}
                    content={"Start the project"}
                  />
                  <div className={styles.mail_information}>
                    <div className={styles.mail_header}>Or write to us at:</div>
                    <p className={styles.mail}>info@kargakarga.com</p>
                  </div>
                </div>
              </div>
              <div className={styles.start_the_project_image}>
                <Image
                  src={"/images/startTheProject/phone.png"}
                  alt=""
                  layout="fill"
                />
              </div>
            </div>
          </div>
        ) : null}
      </section>
      <section className={`${styles.section} ${styles.section_faq}`}>
        <div className={styles.section_header_wrapper}>
          <SectionHeader header={"FAQ"} />
          <div className={styles.header_shadow_faq}>
            <Shadow />
          </div>
        </div>
        <div className={styles.faq}>
          {fAQ.map((question) => {
            return (
              <FAQ
                key={question.id}
                {...question}
                clickedQuestion={clickedQuestion}
                setClickedQuestion={setClickedQuestion}
              />
            )
          })}
        </div>
      </section>
      <section
        className={`${styles.section} ${styles.section_start_your_project}`}
      >
        <div className={styles.start_your_project_content_wrapper}>
          <div className={styles.form_container}>
            <h3 className={styles.start_your_project_header}>
              Let's start your project!
            </h3>
            <div>
              <h4 className={styles.start_your_project_form_header}>
                Leave your contact details and we will contact you
              </h4>
              <StartYourProjectForm />
            </div>
          </div>
          <div className={styles.masonry_container}>
            <Masonry />
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.social_media_links}>
          <div className={`${styles.link} ${styles.instagram}`}>
            <AiOutlineInstagram />
          </div>
          <div className={`${styles.link} ${styles.linkedin}`}>
            <BiLogoLinkedin />
          </div>
          <div className={`${styles.link} ${styles.twitter}`}>
            <BsTwitter />
          </div>
        </div>
        <p className={styles.footer_text}>
          Üretken insanların tanışıp, proje üretebildiği açık inovasyon merkezi.
        </p>
      </footer>
    </div>
  )
}
