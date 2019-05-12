import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import topView from "../../images/top-view.jpg";

import "../../styles/about.scss";

const AboutPage = () => (
  <Layout>
    <section className="section top-view">
      <div className="container">
        <img src={topView} alt="top-view" width="100%" />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h1 className="title">This is About Page</h1>
        <p className="subtitle is-6 is-spaced">
          Sample Text : As they rounded a bend in the path that ran beside the
          river, Lara recognized the silhouette of a fig tree atop a nearby
          hill. The weather was hot and the days were long. The fig tree was in
          full leaf, but not yet bearing fruit. Soon Lara spotted other
          landmarks—an outcropping of limestone beside the path that had a
          silhouette like a man’s face, a marshy spot beside the river where the
          waterfowl were easily startled, a tall tree that looked like a man
          with his arms upraised. They were drawing near to the place where
          there was an island in the river. The island was a good spot to make
          camp. They would sleep on the island tonight.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="title">About Us</h2>
        <div className="columns is-desktop is-vcentered">
          <Link to="about/message" className="about-card">
            <div className="column message">
              <p className="title is-3">Message</p>
            </div>
          </Link>
          <Link to="about/vision" className="about-card">
            <div className="column vision">
              <p className="title is-3">Vision</p>
            </div>
          </Link>
          <Link to="about/members" className="about-card">
            <div className="column members">
              <p className="title is-3">Members</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
