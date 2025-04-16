import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";
// import { motion } from "framer-motion";
import { Skills } from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faSnapchatGhost,
} from "@fortawesome/free-brands-svg-icons";

export const About = () => {
  return (
    <ABOUT id="about" className="about section">
      <Reveal delay={1.25}>
        <h2>Some Things About Me</h2>
      </Reveal>
      <Reveal>
        <div className="about-content">
          <div className="about-card">
            <div className="about-avatar">
              <img src="/ProfilePhoto.png" alt="Profile" />
            </div>
            <div>
              <h3>Sahil Dagar</h3>
              <a
                href="/Resume.pdf"
                className="nav-link resume"
                title="Download Resume"
                id="resume-link-2"
                download
                style={{ display: "none" }}
              >
                Resume
              </a>
              <p id="user-detail-intro">
              I’m a DevOps Engineer with a strong focus on AWS cloud infrastructure.
              I specialize in automating deployment
               processes and optimizing cloud environments for scalability and performance. 
              
                <br />My goal is to design and implement scalable, reliable, and efficient cloud-based solutions that
                 streamline deployment and ensure seamless performance across services
              </p>
            </div>
          </div>
          <div class="about-xp">
            <Reveal delay={1.6}>
              <div className="xp-card">
                <h4>Achievements</h4>
                <p>
                  Created <span>3 Construct Week</span> winning projects at
                  Masai School.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1.8}>
              <div className="xp-card">
                <h4>Certification</h4>
                <p>
                Completed Cloud Computing Certification from IIT Kharagpur 
                </p>
              </div>
            </Reveal>
          </div>
          <div className="about-socials">
  <a href="https://www.linkedin.com/in/sahil-dagar2002/" target="_blank" rel="noopener noreferrer">
    <div className="social-card" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "0.5rem" }}>
      <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
      <p>LinkedIn</p>
    </div>
  </a>
  
  <a href="https://github.com/dagar-Sahil03" target="_blank" rel="noopener noreferrer">
    <div className="social-card" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "0.5rem" }}>
      <FontAwesomeIcon className="icon" icon={faGithub} />
      <p>Github</p>
    </div>
  </a>
  
  <a href="https://www.instagram.com/Dagar_Sahil03" target="_blank" rel="noopener noreferrer">
    <div className="social-card" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "0.5rem" }}>
      <FontAwesomeIcon className="icon" icon={faInstagram} />
      <p>Instagram</p>
    </div>
  </a>

  <a href="https://www.snapchat.com/add/Sahil_dagar03" target="_blank" rel="noopener noreferrer">
    <div className="social-card" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "0.5rem" }}>
      <FontAwesomeIcon className="icon" icon={faSnapchatGhost} />
      <p>Snapchat</p>
    </div>
  </a>
</div>
</div>

      </Reveal>
      <Reveal delay={2}>
        <Skills></Skills>
      </Reveal>
    </ABOUT>
  );
};

const ABOUT = styled.section`
  padding-block: 5rem;
  h2 {
    margin-bottom: 4rem;
  }
  .about-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "about about socials"
      "xp xp socials"
      "skills skills skills";
    gap: 2rem;
    .about-card {
      grid-area: about;
      display: flex;
      gap: 2rem;
      align-items: flex-start;
      justify-content: center;
      background-color: var(--primary);
      color: var(--background);
      padding: 2.5rem 1rem;
      border-radius: 0.5rem;
      /* width: 70%; */
      position: relative;
      #user-detail-intro {
        max-width: 80%;
      }
      .about-avatar {
        /* width: 50%; */
        width: 25%;
        overflow: hidden;
        img {
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          object-fit: cover;
          object-position: top;
          background-color: var(--background);
          box-shadow: 0 -5px 5px var(--primary), 0 -10px 10px var(--primary);
          padding: 0.5rem;
        }
      }
      & > div:nth-of-type(2) {
        /* flex-grow: 1; */
        text-align: left;
      }
      &::after {
        content: "*";
        position: absolute;
        width: 10%;
        height: 10%;
        top: -0rem;
        right: 1rem;
        font-size: 7rem;
        z-index: 100;
        font-style: italic;
        opacity: 0.5;
        line-height: 1.1;
        font-weight: 600;
        color: var(--text);
        /* background-color: red; */
      }
    }
  }
  .about-xp {
    grid-area: xp;
    display: flex;
    gap: 1rem;
    align-items: stretch;
    justify-content: flex-start;
    .xp-card {
      border: 2px solid var(--secondary);
      background-color: var(--background);
      color: var(--secondary);
      padding: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 2px var(--background), 0 0 5px var(--background);
      p {
        color: var(--text);
        max-width: 80%;
        margin-inline: auto;
        margin-top: 0.5rem;
      }
    }
  }
  .about-socials {
    grid-area: socials;
    border: 2px solid var(--secondary);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    padding: 1rem;
    /* border: 1px solid red; */
    > div > * {
      /* border: 1px solid blue; */
      display: flex;
      gap: 1rem;
      align-items: center;
    }
      .helper-flex{
        display:flex;
        align-items:center;
      justify-content:space-between;      
      }
    .social-card {
      flex-grow: 1;
      p {
        letter-spacing: 2px;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: lighter;
      }
      .icon {
        font-size: 2rem;
        padding: 1rem;
        border: 1px solid var(--secondary);
        border-radius: 0.25rem;
        color: var(--secondary);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    padding-block: 4rem;
    padding-inline: 1rem;
    h2 {
      margin-bottom: 3rem;
    }
    .about-content {
      grid-template-columns: repeat(2, 1fr) min-content;
      gap: 1rem;
      .about-card {
        gap: 2rem;
        padding: 2rem 1rem;
        /* width: 70%; */
        #user-detail-intro {
          max-width: auto;
        }
        .about-avatar {
          /* width: 50%; */
          width: 45%;
          overflow: hidden;
          img {
            aspect-ratio: 1;
            width: 10vw;
            height: 10vw;
            padding: 0.25rem;
          }
        }
        &::after {
          content: "*";
          width: 8%;
          height: 8%;
        }
      }
    }
    .about-socials {
      align-items: stretch;
      justify-content: space-between;
      > div > * {
        gap: 0.5rem;
      }
      .social-card {
        flex-grow: 1;
        p {
          letter-spacing: 1px;
          font-size: 1rem;
        }
        .icon {
          font-size: 1.5rem;
        }
      }
    }
    .about-xp {
      .xp-card {
        padding: 1rem;
        border-radius: 0.5rem;
      }
    }
  }
  @media screen and (max-width: 800px) {
    padding-block: 3rem;
    .about-content {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        "about about"
        "xp xp"
        "skills skills";
      gap: 1rem;
      .about-card {
        gap: 1rem;
        padding: 1rem;
        .about-avatar {
          img {
            aspect-ratio: 1;
            width: 100%;
            height: 100%;
            padding: 0.25rem;
          }
        }
      }
    }
    .about-socials {
      display: none;
    }
    .about-xp {
      .xp-card {
        padding: 0.75rem;
      }
    }
  }
  @media screen and (max-width: 520px) {
    padding-block: 2rem;
    .about-xp {
      flex-direction: column;

      .xp-card {
        p {
          color: var(--p);
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    padding-block: 1rem;
    .about-card {
      gap: 1rem;
      flex-direction: column;
      justify-content: center;
      align-items: center !important;
      #user-detail-intro {
        max-width: 100% !important;
        width: 100% !important;
        text-align: center !important;
        font-size: var(--p);
        > h3 {
          text-align: center !important;
        }
      }
      & > div:nth-of-type(2) {
        /* flex-grow: 1; */
        text-align: center !important;
      }
      &::after {
        display: none;
      }
    }
  }
`;
