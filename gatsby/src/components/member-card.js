import React from "react";
import { Link } from "gatsby";

const MemberCard = data => (
  <Link to={data.pagePath}>
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={data.image}
              alt="Placeholder image"
              className="member-orange"
            />
          </figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{data.name}</p>
              <p className="subtitle is-6">{data.snsName}</p>
            </div>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
            <a href="#">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default MemberCard;
