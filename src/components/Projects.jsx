import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Projects = () => {
  return (
    <PROJECTS id="projects">
      <Reveal>
        <h2>Some of my work</h2>
      </Reveal>
      {/* <Reveal>
        <div className="projects-container design">
          <div className="project-card">
            <img src="/FoodDelivery.png" alt="First Design Image" />
            <div className="project-content">
              <h4 className="project-title">Food Delivery App</h4>
              <p className="project-description">
                A modern food delivery app UI design
              </p>
            </div>

            <div className="project-tech-stack tags">
              <div className="tag">Figma</div>
              <div className="tag">Photoshop</div>
            </div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="view-project">
              <a
                href="https://www.figma.com/proto/bFoF0jUF0aGkyohmSWamMd/Portfolio-Website-(Copy)?type=design&node-id=1001-2&t=II2tf8K4XEHAqRyZ-1&scaling=min-zoom&page-id=42%3A82&mode=design"
                target="_blank"
                title="View Design"
                className="project-deployed-link"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <a
                href="#"
                target="_blank"
                className="project-github-link"
                title="Codebase"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="project-card">
            <img src="/Laundry.png" alt="First Design Image" />
            <div className="project-content">
              <h4 className="project-title">Washers & Dryers Web Design</h4>
              <p className="project-description">
                UI design for a laundry service website.
              </p>
            </div>
            <div className="project-tech-stack tags">
              <div className="tag">Figma</div>
            </div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="view-project">
              <a
                href="https://www.figma.com/proto/mR7KCGIKxxtK6ThoZY6IMA/landing-page-design?type=design&node-id=2-526&t=gW58uXAmb5PWq8vk-1&scaling=min-zoom&page-id=0%3A1&mode=design"
                target="_blank"
                title="View Design"
                className="project-deployed-link"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <a
                href="#"
                target="_blank"
                className="project-github-link"
                title="Codebase"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div> 
      </Reveal> */}
      <Reveal>
        <div className="projects-container development">
          <div className="project-card col-2">
            <div className="view-project">
              <a
                href="https://warlike-current-5989-gamma.vercel.app/"
                className="project-deployed-link"
                target="_blank"
                title="Live Website"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <a
                href="https://github.com/AyushmaanRajput/warlike-current-5989"
                target="_blank"
                className="project-github-link"
                title="Codebase"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" target="_blank" title="Project Explaination">
                <FontAwesomeIcon icon={faPlay} />
              </a>
            </div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <img src="/SwiftPay.png" alt="SwiftPay Dashboard Image" />
            <div className="project-content">
              <h4 className="project-title">SwiftPay (Finance Website)</h4>
              <p className="project-description">
                Swiftpay is a dynamic and user-friendly finance website that
                revolutionizes the way you manage your financial transactions.
              </p>
            </div>
            <div className="project-tech-stack tags">
              <div className="tag">React</div>
              <div className="tag">Redux</div>
              <div className="tag">CSS (Styled Components)</div>
            </div>
          </div>
          <div className="project-card col-2">
            <img src="/Travelo.png" alt="Travelo Project" />
            <div className="view-project">
              <a
                href="https://stately-cactus-6c6a66.netlify.app/"
                className="project-deployed-link"
                target="_blank"
                title="Live Website"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <a
                href="https://github.com/AyushmaanRajput/knowing-ladybug-5395"
                target="_blank"
                className="project-github-link"
                title="Codebase"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" target="_blank" title="Project Explaination">
                <FontAwesomeIcon icon={faPlay} />
              </a>
            </div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="project-content">
              <h4 className="project-title">Travelo (Travel Agency Website)</h4>

              <p className="project-description">
                Your gateway to hassle-free travel planning and bookings.
              </p>
            </div>
            <div className="project-tech-stack tags">
              <div className="tag">HTML</div>
              <div className="tag">CSS</div>
              <div className="tag">Javascript</div>
            </div>
          </div>
          <div className="project-card col-2">
            <div className="view-project">
              <a
                href="https://concerned-picture-9849-frontend.vercel.app/"
                className="project-deployed-link"
                target="_blank"
                title="Live Website"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <a
                href="https://github.com/AyushmaanRajput/concerned-picture-9849"
                target="_blank"
                className="project-github-link"
                title="Codebase"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" target="_blank" title="Project Explaination">
                <FontAwesomeIcon icon={faPlay} />
              </a>
            </div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <img
              src="https://camo.githubusercontent.com/ab9a19d0de34db1dfe90409e4e509ceaf0f05370110e5aaa23c2d002528d764d/68747470733a2f2f6465762d746f2d75706c6f6164732e73332e616d617a6f6e6177732e636f6d2f75706c6f6164732f61727469636c65732f6b63353668756b306261316d6c61636b686331732e706e67"
              alt="Recipe Hub Feed"
            />
            <div className="project-content">
              <h4 className="project-title">
                RecipeHub (Recipe Sharing Platform)
              </h4>
              <p className="project-description">
                RecipeHub is a user-friendly culinary hub that offers a wealth
                of features for food enthusiasts of all skill levels.
              </p>
            </div>
            <div className="project-tech-stack tags">
              <div className="tag">React</div>
              <div className="tag">Redux</div>
              <div className="tag">Chakra UI</div>
              <div className="tag">Express</div>
              <div className="tag">Mongoose</div>
              <div className="tag">Socket.io</div>
            </div>
          </div>
          <div className="project-card col-2">
            <img src="./Intellibot.png" alt="Intellibot" />
            <div className="view-project">
              <a
                href="https://intellibotfrontend.vercel.app/"
                className="project-deployed-link"
                target="_blank"
                title="Live Website"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <a
                href="https://github.com/AyushmaanRajput/Intellibot-Hackathon"
                target="_blank"
                className="project-github-link"
                title="Codebase"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" target="_blank" title="Project Explaination">
                <FontAwesomeIcon icon={faPlay} />
              </a>
            </div>
            <div className="overlay"></div>
            <div className="overlay"></div>
            <div className="project-content">
              <h4 className="project-title">
                Intellibot (Interview Simulator with OpenAI)
              </h4>

              <p className="project-description">
                A Interview simulator powered by OpenAI's API.
              </p>
            </div>
            <div className="project-tech-stack tags">
              <div className="tag">React(Typescript)</div>
              <div className="tag">Tailwind</div>
              <div className="tag">Express</div>
              <div className="tag">Mongoose</div>
              <div className="tag">OpenAI</div>
            </div>
          </div>
        </div>
      </Reveal>
    </PROJECTS>
  );
};

const PROJECTS = styled.section`
  padding-block: 5rem;
  h2 {
    margin-bottom: 4rem;
  }
  hr {
    margin-block: 2rem;
    border: none;
  }
  .development img {
    transform: translateY(-100px);
    transition: all 0.25s ease-in;
    transform-origin: center;
  }
  .development .project:hover img {
    transform: translateY(-75px);
  }
  .projects-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-inline: 1rem;
    margin-bottom: 4rem;
    .project-card.col-2 {
      grid-column: span 1;
      height: 500px;
      img {
        object-position: bottom;
      }
    }
    .project-card {
      text-align: left;
      position: relative;
      border-radius: 0.5rem;
      overflow: hidden;
      background-blend-mode: hard-light;
      transition: all 0.5s ease-in;

      &:hover .overlay {
        top: 0%;
      }
      &:hover .view-project {
        opacity: 1;
        /* display:flex; */
      }
      &:hover .project-content > * {
        transform: translateY(-25px) scale(1.05);
      }
      img {
        /* width:250%; */
        /* height:150%; */
        object-fit: cover;
        width: 100%;
        height: 150%;
      }
      .project-content {
        position: absolute;
        z-index: 11;
        width: 100%;
        padding: 1rem;
        bottom: 0;

        background-color: transparent !important;
        background-image: linear-gradient(
          to top,
          var(--background),
          transparent
        );
        h4 {
          color: var(--text);
          opacity: 0.9;
          margin-bottom: 0.5rem;
          transition: all 0.25s ease-in;
          transform-origin: left;
        }
        p {
          transition: all 0.25s ease-in;
          transform-origin: left;
          color: var(--secondary);
          margin-bottom: 0.5rem;
          max-width: 600px;
        }
      }
      .tags {
        position: absolute;
        top: 1rem;
        left: 1rem;
        z-index: 15;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        .tag {
          background-color: var(--background-lightest);
          padding: 0.35rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          color: var(--primary);
          /* text-transform:uppercase; */
          letter-spacing: 1px;
        }
      }
      .overlay {
        position: absolute;
        inset: 0;
        top: 80%;
        /* background-blend-mode: hard-light; */
        box-shadow: 0 0 10px 5px var(--background-light),
          0 0 20px 10px var(--background-light),
          0 0 40px 15px var(--background-light),
          0 0 80px 20px var(--background-light);
        background-color: var(--background-light);
        background-image: linear-gradient(
          to top,
          var(--background-light),
          var(--background-lightest)
        );
        opacity: 0.2;
        z-index: 10;
        transition: all 0.25s ease-in;
      }
      .overlay:last-of-type {
        background-color: var(--background-lightest);
        top: 50%;
        opacity: 0.1;
      }
      .view-project {
        /* transition-delay: 1s; */
        opacity: 0;
        position: absolute;
        z-index: 12;
        color: var(--text);
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        transition: all 0.25s ease-in;
        a:first-of-type {
          transform: rotate(-45deg);
        }
        a:last-of-type {
          > * {
            margin-left: 0.3rem;
          }
        }
        /* opacity: 0.5; */
        /* display: none; */

        a {
          background-color: var(--background-light);
          font-size: var(--h2);
          /* aspect-ratio: 1; */
          padding: 1.5rem;
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: var(--primary);
          font-weight: lighter;
          /* transition: none; */
          transition-duration: 0.25s;
          &:hover {
            transition-delay: none;
            color: var(--primary);
            filter: none;
          }
        }
        a::before,
        a::after {
          color: var(--primary) !important;

          content: "";
          display: none;
          color: transparent;
        }
      }
    }
    .project-card::before {
      position: absolute;
      content: "";
      inset: 0;
      background-color: var(--background-lightest);
      opacity: 0.1;
    }
    .project-card:first-of-type {
      border: 4px solid var(--primary);
    }
  }
  @media screen and (max-width: 1100px) {
    h2 {
      margin-bottom: 3rem;
    }
    hr {
      margin-block: 1.5rem;
      border: none;
    }

    .projects-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding-inline: 1rem;
      margin-bottom: 4rem;
      .project-card.col-2 {
        grid-column: span 1;
        height: 500px;
        img {
          object-position: bottom;
        }
      }
      .project-card {
        img {
          height: 120%;
          object-position: top;
        }
        .project-content {
          z-index: 8;
          p {
            max-width: 500px;
          }
        }
        .tags {
          z-index: 9;
        }
        .overlay {
          z-index: 8;
        }
        .view-project {
          opacity: 1;
          /* display: none; */
          z-index: 9;
          a {
            padding: 1.25rem;
            width: 5rem;
            height: 5rem;
          }
        }
      }
      .project-card:first-of-type {
        border: 3px solid var(--primary);
      }
    }
  }
  @media screen and (max-width: 850px) {
    h2 {
      margin-bottom: 2rem;
    }
    .projects-container {
      gap: 1rem;
      margin-bottom: 2rem;
      .project-card.col-2 {
        height: 400px;
        img {
          object-position: top;
        }
      }
      .project-card {
        img {
          height: 120%;
          object-position: top;
        }
        .project-content {
          z-index: 8;
          p {
            max-width: 300px;
            font-size: var(--p);
          }
        }
        .tags {
          z-index: 9;
        }
        .overlay {
          z-index: 8;
        }
        .view-project {
          z-index: 9;
          gap: 1rem;
          a {
            padding: 1rem;
            width: 3rem;
            height: 3rem;
          }
          a:last-of-type {
            > * {
              margin-left: 0rem;
            }
          }
        }
      }
      .project-card:first-of-type {
        border: 3px solid var(--primary);
      }
    }
  }

  @media screen and (max-width: 700px) {
  }
`;
