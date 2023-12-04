import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="container2">
      <div className="cards">
        <div className="card-info">
          <h2 className="card-subtitle">About CampusCodeHub</h2>
          <p className="card-descripition">
            CampusCodeHub is more than just a version control system; it's a
            dynamic platform that facilitates collaboration among developers
            worldwide. By providing a robust framework for version control,
            CampusCodeHub allows users to manage, track, and coordinate changes
            made to code efficiently. This ensures seamless collaboration and
            transparency within teams of any size.
          </p>
        </div>
        <div className="card-info">
          <h2 className="card-subtitle">Uses of CampusCodeHub</h2>
          <p className="card-descripition">
            Version Control: CampusCodeHub offers a platform for efficient
            tracking, managing, and storing various versions of code, ensuring
            seamless collaboration among developers. Collaboration Hub: It
            facilitates teamwork through pull requests, issues, and project
            boards, enabling transparent and effective communication for project
            enhancements. Open-Source Community: CampusCodeHub fosters a vibrant
            community of developers, encouraging code sharing, contribution to
            projects, and learning from diverse resources. Workflow Automation:
            With CampusCodeHub Actions, users automate processes like testing,
            building, and deploying code, streamlining development workflows for
            increased efficiency.
          </p>
        </div>
        <div className="card-info">
          <h2 className="card-subtitle">How to use CampusCodeHub</h2>
          <p className="card-descripition">
            Empower Collaboration: CampusCodeHub aims to empower collaboration
            among developers worldwide by providing tools and features that
            facilitate seamless teamwork, communication, and contribution to
            projects. Support Open Source: CampusCodeHub is committed to
            supporting and fostering the open-source community. It encourages
            developers to share code, contribute to open-source projects, and
            learn from a diverse range of resources. Enable Efficient
            Development: CampusCodeHub strives to enable efficient development
            workflows by offering version control, project management tools, and
            automation capabilities. This helps developers streamline their
            processes and increase productivity. Build a Strong Developer
            Community: CampusCodeHub seeks to build and nurture a strong,
            inclusive developer community where individuals can connect, learn,
            and grow. It promotes collaboration, learning, and the exchange of
            ideas among developers in colleges and university.
          </p>
        </div>
      </div>
      <Link to="/Login" style={{ textDecoration: "none" }}>
        <button class="btn-more">View Applications</button>
      </Link>
    </div>
  );
}

export default Home;
