import React from "react";
import Transition from "../../components/transition/Transition";

import ProjectImg1 from "../../assets/images/projects/project-1.jpg";
import { MetaLogo, XLogo } from "@phosphor-icons/react";

import MagneticButton from "../../components/magneticbutton/MagneticButton";

import "./sample-blog.css";

function SampleBlog() {
  return (
    <div className="sample-blog page">
      <div className="container">
        <div className="s-blog-hero">
          <h2>The Power of Authenticity in Content Creation</h2>
        </div>

        <div className="blog-content">
          <div className="s-blog-col scroll">
            <p>
              <span>Exhibitions • SEPTEMBER 9, 2021</span>
            </p>

            <br />
            <h4>
              In the world of social media, being yourself is the ultimate 
              competitive advantage. Whether it's through a podcast mic or an 
              Instagram story, authenticity creates a bridge that no algorithm 
              can replace.
            </h4>
            <br />
            <br />
            <p>
              When I first started my podcasting journey in the UAE, I felt 
              the pressure to be "perfect." I thought every word had to be 
              scripted and every frame of my vlogs had to look like a movie. 
              But I soon realized that my audience wasn't looking for 
              perfection—they were looking for a connection.
            </p>
            <br />
            <br />
            <h3>
              Connecting with the audience through shared struggles and comedy.
            </h3>
            <p>
              Comedy is a universal language. It breaks down barriers and 
              makes even the most serious self-improvement topics 
              approachable. By sharing my own failures with a touch of humor, 
              I've been able to build a community that feels more like a 
              family than just "followers."
            </p>
            <br />
            <br />
            <p>
              Through this blog, we delve into the principles of color theory,
              from the color wheel and color harmony to the psychological
              effects of colors. We'll explore how colors can be used to grab
              attention, evoke moods, and even influence behavior. This journey
              is not just for designers but for anyone eager to apply the power
              of color in their projects or brands.
            </p>
            <br />
            <br />
            <p>
              The application of color theory extends beyond the canvas of
              digital design; it's present in interior design, fashion, and
              branding. Understanding the dynamics of color can transform the
              ordinary into the extraordinary, turning simple designs into
              memorable experiences. Join us as we uncover the secrets of color
              theory and how you can leverage its power to elevate your work.
            </p>
            <br />
            <br />
            <p>
              Beyond theory, we will showcase practical examples of how color
              theory has been effectively applied in various design projects.
              From brand identities that resonate with audiences on a
              psychological level to user interfaces that improve usability and
              accessibility—color is a tool that, when mastered, can change the
              game.
            </p>
            <br />
            <br />
            <p>
              Dive into the world of color with us, and discover how to harness
              its potential in your next design project. Whether you're building
              a brand, designing a website, or creating a marketing campaign,
              understanding color theory can elevate your work and help you
              communicate more effectively with your audience.
            </p>
            <br />
            <br />
          </div>
          <div className="s-blog-col sticky">
            <p id="blog-share">
              <span>Share</span>{" "}
              <div className="share-icon">
                <MetaLogo size={18} weight="light" color="#fff" />
              </div>
              <div className="share-icon">
                <XLogo size={18} weight="light" color="#fff" />
              </div>
            </p>

            <div className="blog-content-img">
              <img src="/IMG-20260314-WA0030.jpg" alt="" />
            </div>
          </div>
        </div>

        <MagneticButton />
      </div>
    </div>
  );
}

export default Transition(SampleBlog);
