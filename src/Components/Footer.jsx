import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <footer className="py-3">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link px-2">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link px-2">
                Contact
              </Link>
            </li>
          </ul>
          <p className="text-center">© 2023 CampusCodeHub</p>
        </footer>
      </div>
    </div>
  );
}
