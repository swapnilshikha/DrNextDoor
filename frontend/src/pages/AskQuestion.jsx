import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBack from "./../assets/login-back.jpg";

const AskQuestion = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  useEffect(() => {
    document.body.style.backgroundImage = `url(${loginBack})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "question") {
      setQuestion(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/questions", { // Backend API URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: question, email: email }),
      });

      if (response.ok) {
        setQuestion("");
        setEmail("");
        setSubmissionMessage("Your question has been submitted successfully! We will get back to you soon.");
      } else {
        const errorData = await response.json();
        setSubmissionMessage(`Error submitting question: ${errorData.message || "Something went wrong."}`);
      }
    } catch (error) {
      setSubmissionMessage(`Error submitting question: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>
        {`
          .ask-background {
            min-height: 90vh;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-left: 5%;
            padding-right: 5%;
          }

          .ask-overlay {
            background-color: rgba(0, 0, 0, 0.6);
            color: white;
            padding: 30px;
            border-radius: 20px;
            max-width: 650px;
            width: 100%;
            box-shadow: 0 0 15px rgba(0,0,0,0.5);
            backdrop-filter: blur(4px);
          }

          .ask-heading {
            font-size: 2.5rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 25px;
          }

          .ask-form {
            display: flex;
            flex-direction: column;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-group label {
            display: block;
            font-size: 1rem;
            color: #ddd;
            margin-bottom: 8px;
          }

          .form-group input[type="email"],
          .form-group textarea {
            width: calc(100% - 20px);
            padding: 10px;
            border: 1px solid #555;
            border-radius: 6px;
            background-color: #333;
            color: white;
            font-size: 1rem;
          }

          .form-group textarea {
            min-height: 100px;
          }

          .submit-button {
            background-color: #007bff;
            border: none;
            padding: 12px 24px;
            font-size: 1rem;
            color: white;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .submit-button:hover {
            background-color: #0056b3;
          }

          .submission-message {
            margin-top: 20px;
            padding: 15px;
            background-color: #4CAF50;
            color: white;
            border-radius: 8px;
            text-align: center;
          }

          @media (max-width: 768px) {
            .ask-overlay {
              padding: 20px;
              max-width: 100%;
            }
          }
        `}
      </style>

      <div className="ask-background">
        <div className="ask-overlay">
          <div className="ask-heading">Ask a Question</div>
          {submissionMessage && (
            <div className="submission-message">{submissionMessage}</div>
          )}
          {!submissionMessage && (
            <form onSubmit={handleSubmit} className="ask-form">
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="question">Your Question:</label>
                <textarea
                  id="question"
                  name="question"
                  value={question}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Question"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default AskQuestion;