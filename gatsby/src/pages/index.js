import React from "react";

import Layout from "../components/layout";
import topView from "../images/top-view.jpg";

import "../styles/index.scss";

const IndexPage = () => (
  <Layout>
    <section className="section top-view">
      <div className="container">
        <img src={topView} alt="top-view" width="100%" />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h1 className="title">This Site is created by HTML , CSS & js</h1>
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
        <h3 className="subtitle is-3">Library what I use on this site is</h3>
        <p className="subtitle is-6">
          <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">
            bulma
          </a>
        </p>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
