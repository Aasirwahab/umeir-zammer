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
                <img src="/IMG-20260314-WA0030.jpg" alt="Umeir Zammer" />
              </div>

              <div className="faqs">
                <Faq data={data} />
              </div>
            </div>
          </div>
        </section>



        <section className="about-contact">
          <div className="about-contact-copy">
            <h2>Powered by Your Creativity</h2>
            <p>
              <span>
                For collaborations, podcast inquiries, or just to say hi,
                reach out to umeir.zammer@example.com
              </span>
            </p>

            <br />
            <p>
              <span>+971 55 283 3155</span>
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
