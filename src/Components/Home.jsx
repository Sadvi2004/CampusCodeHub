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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            pariatur voluptatem minima aspernatur delectus voluptates autem
            molestiae expedita eos dolor?
          </p>
        </div>
        <div className="card-info">
          <h2 className="card-subtitle">Uses of CampusCodeHub</h2>
          <p className="card-descripition">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            pariatur voluptatem minima aspernatur delectus voluptates autem
            molestiae expedita eos dolor?
          </p>
        </div>
        <div className="card-info">
          <h2 className="card-subtitle">How to use CampusCodeHub</h2>
          <p className="card-descripition">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            pariatur voluptatem minima aspernatur delectus voluptates autem
            molestiae expedita eos dolor?
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
