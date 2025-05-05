import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginBack from "./../assets/login-back.jpg";

const ContactUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundImage = `url(${loginBack})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  }, []);

  return (
    <>
      <style>
        {`
          .contact-background {
            min-height: 90vh;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-left: 5%;
            padding-right: 5%;
          }

          .contact-overlay {
            background-color: rgba(0, 0, 0, 0.6);
            color: white;
            padding: 30px;
            border-radius: 20px;
            max-width: 650px;
            width: 100%;
            box-shadow: 0 0 15px rgba(0,0,0,0.5);
            backdrop-filter: blur(4px);
          }

          .contact-heading {
            font-size: 2.5rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 25px;
          }

          .contact-section p {
            font-size: 1rem;
            color: #ddd;
            line-height: 1.7;
            margin-bottom: 20px;
          }

          .join-button {
            background-color: #28a745;
            border: none;
            padding: 12px 24px;
            font-size: 1rem;
            color: white;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            display: block;
            margin: 0 auto;
          }

          .join-button:hover {
            background-color: #218838;
          }

          @media (max-width: 768px) {
            .contact-overlay {
              padding: 20px;
              max-width: 100%;
            }
          }
        `}
      </style>

      <div className="contact-background">
        <div className="contact-overlay">
          <div className="contact-heading">Contact Us</div>
          <div className="contact-section">
            <p>
              We’d love to hear from you! Whether you’re a doctor looking to join our platform, a patient with a question, or just someone interested in what we do—feel free to reach out.
            </p>
            <p>
              📧 Email:DrNextdoor@gmail.com<br />
              📞 Phone: +91 9861653094<br />
              🕒 Working Hours: 9:00 AM – 6:00 PM IST (Mon–Fri)
            </p>
            <button
              className="join-button"
              onClick={() => navigate("/doctorregister")}
            >
              Want to be a part?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
