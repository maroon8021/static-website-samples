import React from "react";
import Layout from "../../../components/layout";

import "../../../styles/about.scss";
import membersData from "../../../data/members";
import MemberCard from "../../../components/member-card";

const MemberPage = ({ pageContext }) => {
  // eslint-disable-next-line no-console
  console.log(pageContext);
  const { pageData } = pageContext;
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title">This is Members Page</h1>
          <div className="columns is-desktop">
            <div className="column">
              <figure className="image is-4by3">
                <img
                  src={pageData.imagePath}
                  alt="Placeholder image"
                  className="member-orange"
                />
              </figure>
            </div>
            <div className="column">
              <p className="subtitle is-6 is-spaced">{pageData.mainText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p>{pageData.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title">Members</h2>
          <div className="columns is-desktop is-vcentered">
            {membersData.map(data => {
              if (pageData.memberId !== data.memberId) {
                return <MemberCard {...data} />;
              }
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MemberPage;
