import React, { useEffect, useRef } from "react";
import "./sample-project.css";

import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";
import gsap from "gsap";

import ProjectImg1 from "../../assets/images/projects/project-1.jpg";
import ProjectImg2 from "../../assets/images/projects/project-2.jpg";
import ProjectImg3 from "../../assets/images/projects/project-3.jpg";
import ProjectImg4 from "../../assets/images/projects/project-4.jpg";
import ProjectImg5 from "../../assets/images/projects/project-5.jpg";

const SampleProject = () => {
  const nextProjectPreview = useRef();
  const nextProjectPreviewBg = useRef();

  const handleNextProjectHover = () => {
    nextProjectPreview.current.play();
    nextProjectPreviewBg.current.play();
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const nextProjectContainer = document.querySelector(
      ".next-project-preview"
    );

    gsap.to(".next-project-preview", {
      x: clientX - nextProjectContainer.offsetWidth / 2,
      y: clientY - nextProjectContainer.offsetHeight / 2,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleNextProjectHoverOut = () => {
    nextProjectPreview.current.reverse();
    nextProjectPreviewBg.current.reverse();
  };

  useEffect(() => {
    nextProjectPreview.current = gsap
      .timeline({ paused: true })
      .to(".next-project-preview", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      });

    nextProjectPreviewBg.current = gsap
      .timeline({ paused: true })
      .to(".nextProjectPreviewBg", {
        opacity: 1,
        duration: 0.3,
      });
  }, []);

  return (
    <div className="project page">
      <section className="project-hero">
        <img src="/IMG-20260314-WA0019.jpg" alt="" />
      </section>

      <div className="nextProjectPreviewBg">
        <img src="/IMG-20260314-WA0024.jpg" alt="" />
      </div>

      <div className="container">
        <section className="project-title">
          <h1>Podcast Episode Highlight</h1>
          <p>Motivation • Self-Improvement</p>
        </section>

        <section className="project-brief">
          <h2>
            A deep dive into the habits and mindsets that drive success in the modern digital landscape, 
            featuring insights from leading voices in the UAE community.
          </h2>
        </section>

        <section className="project-description">
          <div className="project-row">
            <div className="project-col">
              <div className="project-sub-col">
                <p>
                  <span>Year</span>
                </p>
                <p>2023</p>
              </div>
              <div className="project-sub-col">
                <p>
                  <span>Host</span>
                </p>
                <p>Umeir Zammer</p>
                <p>
                  <span>Guest</span>
                </p>
                <p>Special Guest Interviewee</p>
              </div>
            </div>
            <div className="project-col">
              <p>
                <span>Goals</span>
              </p>
              <p>
                In this episode, we explore the challenges and triumphs of
                building a career as a content creator in the UAE. We discuss
                the importance of authenticity, the power of humor in 
                storytelling, and how to maintain a positive mindset while 
                navigating the ever-changing digital world. This segment 
                showcases Umeir's ability to host engaging conversations that 
                provide real value and inspiration to his audience.
              </p>
            </div>
          </div>
        </section>

        <section className="project-images">
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg1} alt="" />
            </div>

            <div className="project-img">
              <img src={ProjectImg2} alt="" />
            </div>
          </div>
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg3} alt="" />
            </div>

            <div className="project-img">
              <img src={ProjectImg4} alt="" />
            </div>
          </div>
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg5} alt="" />
            </div>

            <div className="project-img"></div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-preview">
            <img src={ProjectImg3} alt="" />
          </div>
          <div className="next-project-copy">
            <p>
              <span>Next Project</span>
            </p>
            <h1
              onMouseOver={() => {
                handleNextProjectHover();
                document.addEventListener("mousemove", handleMouseMove);
              }}
              onMouseOut={() => {
                handleNextProjectHoverOut();
                document.removeEventListener("mousemove", handleMouseMove);
              }}
            >
              <Link to="/">Latest Vlog</Link>
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Transition(SampleProject);
