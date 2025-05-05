import React, { useEffect } from "react";
import loginBack from "./../assets/login-back.jpg";
import { FaUserMd, FaHeartbeat, FaLaptopMedical } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const AboutUs = () => {
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
          .about-background {
            min-height: 100vh;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-left: 5%;
            padding-right: 5%;
            
          }

          .about-overlay {
            background-color: rgba(0, 0, 0, 0.6);
            color: white;
            padding: 30px;
            border-radius: 20px;
            max-width: 650px;
            width: 100%;
            box-shadow: 0 0 15px rgba(0,0,0,0.5);
            backdrop-filter: blur(4px);
          }

          .about-heading {
            font-size: 2.5rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 25px;
          }

          .about-section h3 {
            font-size: 1.6rem;
            margin-bottom: 12px;
          }

          .about-section p {
            font-size: 1rem;
            color: #ddd;
            line-height: 1.7;
          }

          .features {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 20px;
          }

          .feature-box {
            background-color: rgba(255, 255, 255, 0.08);
            border-radius: 15px;
            padding: 15px;
            flex: 0 0 48%;
            display: flex;
            align-items: center;
            transition: transform 0.3s ease;
          }

          .feature-box:hover {
            transform: translateY(-4px);
            background-color: rgba(255, 255, 255, 0.12);
          }

          .feature-icon {
            font-size: 26px;
            margin-right: 12px;
            color: #fff;
          }

          .team-section {
            margin-top: 30px;
          }

          .team-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: center;
            margin-top: 20px;
          }

          .team-card {
            background-color: rgba(255, 255, 255, 0.08);
            padding: 12px;
            border-radius: 15px;
            text-align: center;
            width: 180px;
            transition: all 0.3s ease;
          }

          .team-card:hover {
            background-color: rgba(255, 255, 255, 0.12);
            transform: translateY(-5px);
          }

          .team-card h5 {
            margin-top: 8px;
            font-size: 1rem;
            color: white;
          }

          .team-card p {
            color: #ccc;
            font-size: 0.85rem;
          }

          @media (max-width: 768px) {
            .about-overlay {
              padding: 20px;
              max-width: 100%;
            }

            .feature-box {
              flex: 0 0 100%;
            }

            .team-card {
              width: 100%;
            }
          }
        `}
      </style>

      <div className="about-background">
        <div className="about-overlay">
          <div className="about-heading">About DrNextDoor</div>

          <div className="about-section">
            <h3>Our Mission</h3>
            <p>
              DrNextDoor is committed to empowering doctors with digital tools that simplify healthcare delivery. Our platform offers a smart, intuitive dashboard that bridges the gap between medical professionals and patients.
            </p>

            <div className="features">
              <div className="feature-box">
                <FaUserMd className="feature-icon" />
                <div>
                  <h5>Doctor-Centric Design</h5>
                  <p style={{ color: "#bbb", marginBottom: 0 }}>
                    Tools tailored for doctors’ workflow and patient care.
                  </p>
                </div>
              </div>

              <div className="feature-box">
                <FaLaptopMedical className="feature-icon" />
                <div>
                  <h5>Smart Dashboard</h5>
                  <p style={{ color: "#bbb", marginBottom: 0 }}>
                    Track appointments, patients, and health data in one place.
                  </p>
                </div>
              </div>

              <div className="feature-box">
                <MdSecurity className="feature-icon" />
                <div>
                  <h5>Secure & Private</h5>
                  <p style={{ color: "#bbb", marginBottom: 0 }}>
                    Data protection and privacy are top priorities.
                  </p>
                </div>
              </div>

              <div className="feature-box">
                <FaHeartbeat className="feature-icon" />
                <div>
                  <h5>Better Patient Outcomes</h5>
                  <p style={{ color: "#bbb", marginBottom: 0 }}>
                    Technology that helps you focus on healing and care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="team-section">
            <div className="about-heading" style={{ fontSize: "2rem" }}>
              Meet Our Team
            </div>

            <div className="team-grid">
              <div className="team-card">
                <img
                  src="https://i.pravatar.cc/150?img=3"
                  className="img-fluid rounded-circle"
                  width="60"
                  alt="Doctor 1"
                />
                <h5>Dr. Priya Sharma</h5>
                <p>Co-founder & Cardiologist</p>
              </div>

              <div className="team-card">
                <img
                  src="https://i.pravatar.cc/150?img=5"
                  className="img-fluid rounded-circle"
                  width="60"
                  alt="Doctor 2"
                />
                <h5>Dr. Arjun Mehta</h5>
                <p>CTO & AI Specialist</p>
              </div>

              <div className="team-card">
                <img
                  src="https://i.pravatar.cc/150?img=7"
                  className="img-fluid rounded-circle"
                  width="60"
                  alt="Doctor 3"
                />
                <h5>Dr. Sneha Reddy</h5>
                <p>Head of UX & Surgeon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
