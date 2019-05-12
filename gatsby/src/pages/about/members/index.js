import React from "react";
import topView from "../../../images/about/members.jpg";

import "../../../styles/about.scss";
import membersData from "../../../data/members";
import Layout from "../../../components/layout";
import MemberCard from "../../../components/member-card";

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
        <h2 className="title">Members</h2>
        <div className="columns is-desktop is-vcentered">
          {membersData.map(data => (
            <MemberCard key={data.key} {...data} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
