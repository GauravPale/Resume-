import React, { useState } from 'react';
import './App.css';
import htmlLogo from "./images/html-logo.png";
import cssLogo from "./images/css-logo.png";
import iotLogo from "./images/iot-logo.png";
import reactLogo from "./images/react-logo.png";
import javascriptLogo from "./images/javascript-logo.png";

const App = () => {
  const [resumeData] = useState({
    name: "Gaurav Pale",
    title: "Aspiring Software Developer",
    contact: {
      email: "gauravpale1741@gmail.com",
      phone: "(+91) 8767786455",
    },
    about: "As a Computer Engineering student, I am passionate about turning ideas into reality through IoT, robotics, and skilled in software testing. Driven by curiosity and a passion for tech to create efficient solutions for real-world impact.",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React", logo: reactLogo },
      { name: "IoT", logo: iotLogo },
    ],
    experience: [
      {
        jobTitle: " ",
        duration: " ",
        description: " ",
      },
    ],
    education: [
      {
        degree: "BE Computer Engineer",
        university: "Mumbai University",
        graduationYear: "2026",
      },
    ],
    projects: [
      {
        title: "Arduino Surveillance Bot",
        description: "A bot created using Arduino Uno for surveillance, equipped with motion-detecting sensors and remote control functionality.",
      },
      {
        title: "Vaccine Booking Form",
        description: "A web application to book vaccine appointments according to dosage and nearby clinics, ensuring easy access to vaccination services.",
      },
      {
        title: "Chatbot for Car Booking",
        description: "A chatbot built with Chatfuel for booking cars and scheduling test drives, integrated with car booking APIs.",
      },
      {
        title: "Soil Testing Web App",
        description: "A web application that recommends crops based on soil tests and provides fertilizer and crop care recommendations.",
      },
    ],
    certificates: [
      {
        title: "Create a Lead Generation Messenger Chatbot using Chatfuel",
        issuer: "Coursera Project Network",
        year: "2024",
        link: "https://coursera.org/share/64e486f040a05f55a3e8b8e5c724356e",
      },
      {
        title: "Azure: Create a REST API using NodeJS Serverless Functions",
        issuer: "Coursera",
        year: "2024",
        link: "https://coursera.org/share/cc059b8ac2ebb3d9a3a4757f064de74d",
      },
      {
        title: "Introduction to Flutter",
        issuer: "Simplilearn - Skillup",
        year: "2024",
        link: "https://simpli-web.app.link/e/Y1bdyCn30Nb",
      },
    ],
  });

  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

  const toggleProject = (index) => {
    setExpandedProjectIndex(index === expandedProjectIndex ? null : index);
  };

  return (
    <div className="resume">
      <header className="resume-header">
        <h1>{resumeData.name}</h1>
        <h2>{resumeData.title}</h2>
        <div className="contact-info">
          <p>
            <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a> | 
            <a href={`tel:${resumeData.contact.phone}`}>{resumeData.contact.phone}</a> | 
            <a href="https://github.com/GauravPale" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
            <a href="https://www.linkedin.com/in/gauravpale" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </p>
        </div>
      </header>

      <section className="resume-section about">
        <h3>About Me</h3>
        <p>{resumeData.about}</p>
      </section>

      <section className="resume-section skills">
        <h3>Skills</h3>
        <div className="skills-container">
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" onError={(e) => e.target.src = 'path/to/default-logo.png'} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section projects">
        <h3>Projects</h3>
        <div className="projects-grid">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="project-item">
              <button onClick={() => toggleProject(index)} className="project-button">
                {project.title}
              </button>
              {expandedProjectIndex === index && (
                <p className="project-description">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 
      <section className="resume-section experience">
        <h3>Experience</h3>
        <ul>
          {resumeData.experience.map((job, index) => (
            <li key={index} className="experience-item">
              <h4>{job.jobTitle}</h4>
              <p>{job.duration}</p>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      </section> 
      */}

      <section className="resume-section education">
        <h3>Education</h3>
        <ul>
          {resumeData.education.map((edu, index) => (
            <li key={index} className="education-item">
              <h4>{edu.degree}</h4>
              <p>{edu.university} | {edu.graduationYear}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="resume-section certificates">
        <h3>Certificates</h3>
        <ul>
          {resumeData.certificates.map((certificate, index) => (
            <li key={index} className="certificate-item">
              <h4>{certificate.title}</h4>
              <p>{certificate.issuer} | {certificate.year}</p>
              <a href={certificate.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="resume-footer">
        <p>© 2024 {resumeData.name}</p>
      </footer>
    </div>
  );
};

export default App;
