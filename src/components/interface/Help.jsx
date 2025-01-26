import React, { useState } from "react";

function Help() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const styles = {
    container: {
      fontFamily: "'Roboto', sans-serif",
      padding: "40px",
      width: "100%",
      backgroundColor: "#ffffff",
      boxSizing: "border-box",
      fontSize: "1.5rem",
    },
    header: {
      fontSize: "3rem",
      color: "#333",
      textAlign: "center",
      marginBottom: "30px",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    section: {
      marginBottom: "40px",
    },
    sectionHeader: {
      fontSize: "2.2rem",
      color: "#333",
      marginBottom: "20px",
      fontWeight: 500,
    },
    question: {
      display: "flex",
      justifyContent: "space-between",
      cursor: "pointer",
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#007bff",
      padding: "10px",
      backgroundColor: "#f1f1f1",
      borderRadius: "5px",
      transition: "background-color 0.3s ease",
    },
    questionHovered: {
      backgroundColor: "#007bff",
      color: "#fff",
    },
    questionTitle: {
      fontSize: "1.6rem",
    },
    answer: {
      padding: "10px",
      backgroundColor: "#f9f9f9",
      borderRadius: "5px",
      fontSize: "1.8rem",
      color: "#555",
    },
    list: {
      listStyleType: "disc",
      paddingLeft: "20px",
      margin: 0,
    },
    listItem: {
      fontSize: "1.3rem",
      padding : "10px"
    },
    subSection: {
      marginTop: "40px",
    },
    subHeader: {
      fontSize: "2rem",
      color: "#333",
      marginBottom: "15px",
    },
    subText: {
      fontSize: "1.5rem",
      color: "#555",
      marginBottom: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Help & Support</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionHeader}>Frequently Asked Questions</h2>


        <div>
          <div
            style={{
              ...styles.question,
              ...(activeQuestion === 1 ? styles.questionHovered : {}),
            }}
            onClick={() => toggleAnswer(1)}
          >
            <h3 style={styles.questionTitle}>How do I use Gemini AI?</h3>
            <span style={{ fontSize: "30px" }}>
              {activeQuestion === 1 ? "−" : "+"}
            </span>
          </div>
          {activeQuestion === 1 && (
            <div style={styles.answer}>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Step 1: Enter your query or request in the input box.
                </li>
                <li style={styles.listItem}>
                  Step 2: Press the "Submit" button to send the query to Gemini
                  AI.
                </li>
                <li style={styles.listItem}>
                  Step 3: Wait for the AI to process and generate a response.
                </li>
                <li style={styles.listItem}>
                  Step 4: View the AI's response in the designated response
                  area.
                </li>
                <li style={styles.listItem}>
                  Step 5: Modify your query or provide additional context for
                  better results.
                </li>
                <li style={styles.listItem}>
                  Step 6: Use the AI for various tasks like answering questions,
                  generating ideas, or summarizing data.
                </li>
                <li style={styles.listItem}>
                  Step 7: The AI learns and adapts based on your interactions
                  over time.
                </li>
                <li style={styles.listItem}>
                  Step 8: You can ask the AI to follow up with more specific
                  queries after it provides a response.
                </li>
                <li style={styles.listItem}>
                  Step 9: If the AI's response isn't accurate, provide feedback
                  so it can improve.
                </li>
                <li style={styles.listItem}>
                  Step 10: For complex queries, break them down into smaller,
                  more specific questions to get the best results.
                </li>
              </ul>
            </div>
          )}
        </div>


        <div>
          <div
            style={{
              ...styles.question,
              ...(activeQuestion === 2 ? styles.questionHovered : {}),
            }}
            onClick={() => toggleAnswer(2)}
          >
            <h3 style={styles.questionTitle}>What can Gemini AI do?</h3>
            <span style={{ fontSize: "30px" }}>
              {activeQuestion === 2 ? "−" : "+"}
            </span>
          </div>
          {activeQuestion === 2 && (
            <div style={styles.answer}>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Gemini AI can answer a wide range of questions, including
                  general knowledge and technical queries.
                </li>
                <li style={styles.listItem}>
                  It can summarize text and provide key points from lengthy
                  documents.
                </li>
                <li style={styles.listItem}>
                  It can suggest improvements for writing, code, and other
                  content.
                </li>
                <li style={styles.listItem}>
                  Gemini AI can generate ideas based on user input, such as
                  brainstorming topics or providing creative suggestions.
                </li>
                <li style={styles.listItem}>
                  It is capable of translating text between multiple languages.
                </li>
                <li style={styles.listItem}>
                  Gemini AI can assist in learning by providing explanations and
                  breaking down complex topics.
                </li>
                <li style={styles.listItem}>
                  It can help with decision-making by offering pros and cons or
                  presenting different perspectives.
                </li>
                <li style={styles.listItem}>
                  It can integrate with other systems for automated workflows
                  and process improvements.
                </li>
                <li style={styles.listItem}>
                  Gemini AI can interact with users to simulate conversations,
                  acting as a chatbot.
                </li>
                <li style={styles.listItem}>
                  It can be customized for specific tasks like research,
                  marketing, or software development.
                </li>
              </ul>
            </div>
          )}
        </div>

 
        <div>
          <div
            style={{
              ...styles.question,
              ...(activeQuestion === 3 ? styles.questionHovered : {}),
            }}
            onClick={() => toggleAnswer(3)}
          >
            <h3 style={styles.questionTitle}>How do I contact support?</h3>
            <span style={{ fontSize: "30px" }}>
              {activeQuestion === 3 ? "−" : "+"}
            </span>
          </div>
          {activeQuestion === 3 && (
            <div style={styles.answer}>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  You can contact Gemini AI support through our contact page.
                </li>
                <li style={styles.listItem}>
                  Email us directly at{" "}
                  <a href="mailto:support@gemini.ai">support@gemini.ai</a>.
                </li>
                <li style={styles.listItem}>
                  For urgent issues, call us at +123-456-7890.
                </li>
                <li style={styles.listItem}>
                  Our support team is available 24/7 to assist you.
                </li>
                <li style={styles.listItem}>
                  If your query is related to technical support, please provide
                  detailed information about the issue.
                </li>
                <li style={styles.listItem}>
                  For billing or account-related inquiries, include your account
                  number and relevant details.
                </li>
                <li style={styles.listItem}>
                  We offer live chat support for quicker responses during
                  business hours.
                </li>
                <li style={styles.listItem}>
                  Visit our FAQs for answers to common questions before reaching
                  out.
                </li>
                <li style={styles.listItem}>
                  Support is available in multiple languages—please specify your
                  preferred language.
                </li>
                <li style={styles.listItem}>
                  For non-urgent queries, you can expect a response within
                  24-48 hours.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div style={styles.subSection}>
        <h2 style={styles.subHeader}>How to Use Gemini AI</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Step 1: Enter your query or request in the input box.
          </li>
          <li style={styles.listItem}>
            Step 2: Press "Submit" to send the query to Gemini AI.
          </li>
          <li style={styles.listItem}>
            Step 3: Wait for the AI's response, which will be displayed in the
            response area.
          </li>
        </ul>
      </div>

      <div style={styles.subSection}>
        <h2 style={styles.subHeader}>Support Call</h2>
        <p style={styles.subText}>
          If you're experiencing any issues or need help, don't hesitate to
          reach out to us:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Email: <a href="mailto:support@gemini.ai">support@gemini.ai</a>
          </li>
          <li style={styles.listItem}>Phone: +123-456-7890</li>
        </ul>
      </div>
    </div>
  );
}

export default Help;
