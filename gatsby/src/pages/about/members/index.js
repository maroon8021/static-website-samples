import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import topView from "../images/about/members.jpg";

import "../styles/about.scss";
import membersData from "../../../data/members";

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
            <Link to="about/message">
            <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src={data.image} alt="Placeholder image" class="member-orange">
                </figure>
              </div>

              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">John Smith</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>

              </div>
            </div>
          </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
