import React from "react";
import "./about.css";

import Transition from "../../components/transition/Transition";

import Faq from "react-faq-component";
import Marquee from "react-fast-marquee";
import MagneticButton from "../../components/magneticbutton/MagneticButton";

import PortraitImg from "../../assets/images/home/portrait.jpg";

const About = () => {
  const data = {
    title: "",
    rows: [
      {
        title: "What is the focus of your podcast?",
        content:
          "The Umeir Zammer Podcast is a blend of self-improvement, motivation, and comedy. I believe that personal growth doesn't always have to be so serious, and humor is a powerful tool for learning and connection. My goal is to inspire my audience while keeping them entertained.",
      },
      {
        title: "How do you approach brand collaborations?",
        content:
          "I look for brands that align with my values of growth, authenticity, and positivity. Whether it's through sponsored podcast segments, Instagram stories, or TikTok videos, I aim to create content that feels natural and provides value to my followers while effectively telling the brand's story.",
      },
      {
        title: "What is your audience demographic?",
        content:
          "My audience primarily consists of young adults (18-35) who are interested in self-development, entrepreneurship, and lifestyle content. I have a strong following in the UAE and surrounding regions, with a highly engaged micro-influencer community (5K-25K followers).",
      },
    ],
  };

  return (
    <div className="about page">
      <div className="container">
        <section className="about-marquee">
          <Marquee>
            <h1>
              Sharing Stories of Improvement, Motivation, and Comedy through
              the Umeir Zammer Podcast.
            </h1>
          </Marquee>
        </section>

        <section className="about-intro">
          <h2>
            Umeir Zammer is a dynamic Podcast Host and Multi-platform Creator
            based in the UAE. Focusing on self-improvement, motivation, and
            comedy, he connects with a Micro-audience of 5K-25K followers who
            are passionate about personal growth and high-quality content.
          </h2>
        </section>

        <section className="about-intro-copy">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Est. 1997</span>
              </p>
            </div>
            <div className="about-col">
              <h3>
                Umeir partners with brands across various industries, creating
                engaging content for Instagram and TikTok. His podcast serves as
                a hub for insightful conversations and comedic relief, helping
                his audience navigate life with a positive and growth-oriented
                mindset.
              </h3>
              <h3 style={{ textIndent: "100px" }}>
                Driven by a passion for storytelling and authentic connection,
                Umeir has quickly become a recognizable voice in the UAE's
                influencer landscape, known for his unique blend of motivational
                and humorous content.
              </h3>
            </div>
          </div>
        </section>

        <section className="about-portrait">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Contact</span>
              </p>
              <br />
              <br />
              <p>
                <span>Email: </span> <span>umeir.zammer@example.com</span>
              </p>
              <p>
                <span>Socials: </span> <span>Instagram • TikTok</span>
              </p>
              <p>
                <span>Location: </span>{" "}
                <span>Dubai, UAE</span>
              </p>

              <br />
              <br />
              <br />
            </div>
            <div className="about-col">
              <div className="about-portrait-img">
                <img src="/IMG-20260314-WA0020.jpg" alt="Umeir Zammer" />
              </div>

              <div className="faqs">
                <Faq data={data} />
              </div>
            </div>
          </div>
        </section>

        <section className="about-awards">
          <div className="about-row">
            <div className="about-col"></div>
            <div className="about-col award-header">
              <p>
                <span>Honors and Awards</span>
              </p>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2024</p>
              </div>
              <div className="award-view">
                <p>Best Interactive Design</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Webby Awards</p>
              </div>
              <div className="award-project">
                <p>Dynamic Narratives Platform</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2023</p>
              </div>
              <div className="award-view">
                <p>Innovative UI/UX Design</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>UX Design Awards</p>
              </div>
              <div className="award-project">
                <p>Immersive E-commerce Experience</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2022</p>
              </div>
              <div className="award-view">
                <p>Outstanding Animation</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>AIGA Design Competition</p>
              </div>
              <div className="award-project">
                <p>Cultural Events Platform</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2021</p>
              </div>
              <div className="award-view">
                <p>Interactive Designer</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Communication Arts</p>
              </div>
              <div className="award-project">
                <p>Visual Storytelling Project</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2020</p>
              </div>
              <div className="award-view">
                <p>Creative Innovator </p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Design Intelligence Awards</p>
              </div>
              <div className="award-project">
                <p>Interactive Learning Module</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-awards in-press">
          <div className="about-row">
            <div className="about-col"></div>
            <div className="about-col award-header">
              <p>
                <span>In Press</span>
              </p>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2024</p>
              </div>
              <div className="award-view">
                <p>Interview Highlight</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Design Matters Podcast</p>
              </div>
              <div className="award-project">
                <p>Exploring the Future of Web Design</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2023</p>
              </div>
              <div className="award-view">
                <p>Profile Feature</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Smashing Magazine</p>
              </div>
              <div className="award-project">
                <p>Innovative Animation Techniques</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2022</p>
              </div>
              <div className="award-view">
                <p>Article Feature</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Web Designer Depot</p>
              </div>
              <div className="award-project">
                <p>Next-Gen User Interactions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-contact">
          <div className="about-contact-copy">
            <h2>Powered by Your Creativity</h2>
            <p>
              <span>
                For a CV, portfolio, or inquiries, please reach out to
                hello@curafuturi.com
              </span>
            </p>

            <br />
            <p>
              <span>+1 416 555 1234</span>
            </p>
            <p>
              <span>Instagram • TikTok</span>
            </p>
          </div>
        </section>

        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(About);
