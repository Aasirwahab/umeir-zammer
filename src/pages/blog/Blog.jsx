import React from "react";
import Transition from "../../components/transition/Transition";

import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

import MagneticButton from "../../components/magneticbutton/MagneticButton";

import "./blog.css";

const Blog = () => {
  return (
    <div className="blog page">
      <div className="container">
        <div className="blog-hero">
          <h1>
            Podcast Notes <span>& Vlogs.</span>
          </h1>
        </div>

        <section className="blogs">
          <div className="blog-row">
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        Ep. 01 | The Journey of a Content Creator in UAE
                      </Link>
                    </h3>
                    <p>
                      <span>Podcast Episode</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        Self-Improvement: 5 Habits that Changed My Life
                      </Link>
                    </h3>
                    <p>
                      <span>Self-Improvement</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-row">
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        Why Comedy is Essential for Personal Growth
                      </Link>
                    </h3>
                    <p>
                      <span>Comedy & Motivation</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/sample-blog">
                        Building a Community in the Digital Age
                      </Link>
                    </h3>
                    <p>
                      <span>Community</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <ArrowRight size={32} weight="light" color="#fff" />
                  </div>
                </div>
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
                reach out to umairzameer523@gmail.com
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

export default Transition(Blog);
