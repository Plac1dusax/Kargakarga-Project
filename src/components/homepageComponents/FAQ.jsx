import React from "react"
import styles from "../../styles/componentStyles/homepageStyles/fAQ.module.css"

export default function FAQ(props) {
  const { id, question, answer, clickedQuestion, setClickedQuestion } = props

  function handleQuestionClick() {
    if (clickedQuestion === id) {
      setClickedQuestion(null)
    } else {
      setClickedQuestion(id)
    }
  }

  return (
    <div onClick={handleQuestionClick} className={styles.faq_wrapper}>
      <div className={styles.question_container}>
        <p className={styles.question}>{question}</p>
        <div className={styles.question_status}>
          <div
            className={
              id === clickedQuestion ? styles.vertical_active : styles.vertical
            }
          />
          <div className={styles.horizontal} />
        </div>
      </div>
      <div
        style={id === clickedQuestion ? { gridTemplateRows: "1fr" } : null}
        className={styles.answer_container}
      >
        <div className={styles.expandable}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </div>
  )
}
