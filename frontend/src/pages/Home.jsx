import React from 'react'
import Header from '../components/Header'
import gyno from '../assets/gyno.jpg'
import ortho from '../assets/ortho.jpg'
import cardio from '../assets/cardio.jpg'
import dentist from '../assets/dentist.jpg'
import pedia from '../assets/pedia.webp'
import derma from '../assets/derma.jpg'
import ent from '../assets/ent.jpg'
import gastro from '../assets/gastro.jpeg'
import imuno from '../assets/imun.webp'
import nephro from '../assets/nephro.webp'
import med from '../assets/med.jpg'
import hermato from '../assets/hermato.png'
import psychia from '../assets/psychia.jpg'

const Home = () => {

  

      const doctors = [
        {
          image: gyno,
          name: "Gynocologist",

          description: "Treatment of conditions affecting the Female reporoductive system."
        },
        {
          image: ortho,
          name: "Orthologists",
          description: "Specialization in musculoskeletal disorders and injuries."
        },
        {
          image: cardio,
          name: "Cardiologist",
          description: "Focus on heart health and wellness."
        },
        {
          image: dentist,
          name: "Dentist",
          description: "Dental care and oral health."
        },
        {
          image: pedia,
          name: "Pediatrician",
          description: "Child health and development."
        },
        {
          image: derma,
          name: "Dermatologist",
          description: "Skin, hair, and nail health."
        },
        {
          image: ent,
          name: "ENT Specialist",
          description: "Ear, nose, and throat health."
        },
        {
          image: gastro,
          name: "Gastroenterologist",
          description: "Digestive system health."
        },
        {
          image: imuno,
          name: "Immunologist", 
          description: "Immune system disorders and allergies."
        },
        {
          image: nephro,
          name: "Nephrologist",
          description: "Kidney health and diseases."
        },
        {
          image: med,
          name: "Internal Medicine",
          description: "Comprehensive care for adults."
        },
        {
          image: hermato,
          name: "Hematologist",
          description: "Blood disorders and diseases."
        },
        {
          image: psychia,
          name: "Psychiatrist",
          description: "Mental health and emotional well-being."
        }
        
      ];
      
      // Helper function to chunk doctors into groups of 4
      const chunkDoctors = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
          arr.slice(i * size, i * size + size)
        );
  
  
  return (
    <>

<style>
    {`
       .scroll-wrapper {
  overflow-x: scroll;
  display : flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  padding-bottom: 1rem;
  scroll-behavior: smooth;
  width: 100px,
    }
    `}
  </style>

      <Header />

                <div className="d-flex justify-content-between align-items-center px-5 py-4">
                  <h3>Popular Searches on DrNextDoor..</h3>
                </div>

                <div className="container-fluid">
                <div className="scroll-wrapper d-flex flex-nowrap">
                  {doctors.map((doc, index) => (
                  <div className="card mx-2" style={{ minWidth: '250px', height: '330px' }} key={index}>
                    <img
                      className="card-img-top"
                      src={doc.image}
                      alt={doc.name}
                      style={{ height: '220px', width: '100%', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{doc.name}</h5>
                      <p className="card-text">{doc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
                <br />
          
          <a className="fs-4">View All Specialist..</a>
        
              
    </>
  )
}

export default Home
