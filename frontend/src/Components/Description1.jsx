import React from "react";
import { Link } from "react-router-dom";
import lay from "./../Images/layout.png";
import HMS from "./../Images/HMSHome.png";
import Hms from "./../Images/HMSsourcecode.png";
import HmsAbout from "./../Images/HMSabout.png";
import about from "./../Images/about.png";
import HmsForm from "./../Images/HMSForm.png";
import form from "./../Images/form.png";
import "./Description1.css"; // Ensure this CSS file is properly imported

function Description1() {
  return (
    <div className="afopen">
      <div className="back-ln">
        <h3 className="title">
          Hospital Management
          <Link to="/MainPage" className="link-no-style">
            <button className="btt-back">Back</button>
          </Link>
        </h3>
      </div>

      <p className="description-text">
        Hospital management involves overseeing the efficient functioning of medical facilities by coordinating various aspects like staffing, finances, operations, and patient care. It encompasses strategic planning, resource allocation, and ensuring adherence to regulatory standards to optimize healthcare delivery.
      </p>

      <div className="how2use">
        <h3>Planning and Design:</h3>
        <ol>
          <li><img src={lay} alt="layout" className="code-img" /></li>
          <li>The website layout should be like the above image.</li>
          <li>Define the requirements and functionalities of your HMS.</li>
          <li>Design the system architecture, including databases, user interfaces, and backend logic.</li>
        </ol>

        <h3>Setting up the Environment:</h3>
        <ol>
          <li>Install necessary software like Python, Node.js, or any other language and framework you prefer.</li>
          <li>Set up a database management system like MySQL, PostgreSQL, or MongoDB.</li>
          <li>
            Install VS Code for writing and running code. Helpful extensions are available.
            <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer">Download here</a>
          </li>
        </ol>

        <h3>Backend Development:</h3>
        <ol>
          <li>Handle functionalities like patient management, appointments, and billing.</li>
          <li>Use frameworks like Flask, Express, Django, or Spring.</li>
          <li>Implement data models, APIs, and authentication.</li>
        </ol>

        <h3>Frontend Development:</h3>
        <ol>
          <li>Use HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js.</li>
          <li><a href="https://www.learnvern.com/" target="_blank" rel="noopener noreferrer">Learn frontend development here</a></li>
        </ol>

        <h3>Database Management:</h3>
        <ol>
          <li>Design a schema for your application's data needs.</li>
          <li>Implement CRUD operations for managing records.</li>
        </ol>

        <h3>Integration and Testing:</h3>
        <ol>
          <li>Integrate frontend and backend components.</li>
        </ol>

        <div className="mimg">
          <h3>Home Page</h3>
          <div className="mimage">
            <img src={HMS} alt="HomePage" className="code-img" />
            <p className="hsc">Homepage source code</p>
            <img src={Hms} alt="Homepage Source" className="code-img" />
          </div>
        </div>

        <div className="mimg">
          <h3>About Page</h3>
          <div className="mimage">
            <img src={HmsAbout} alt="AboutPage" className="code-img" />
            <p className="hsc">About page source code</p>
            <img src={about} alt="About Source" className="code-img" />
          </div>
        </div>

        <div className="mimg">
          <h3>Form Page</h3>
          <div className="mimage">
            <img src={HmsForm} alt="FormPage" className="code-img" />
            <p className="hsc">Signup page source code</p>
            <img src={form} alt="Form Source" className="code-img" />
          </div>
        </div>

        <h2>Basic HTML Tags</h2>
        <ul>
          <li><a href="https://www.w3schools.com/tags/tag_button.asp" target="_blank" rel="noopener noreferrer">HTML Buttons</a></li>
          <li><a href="https://www.w3schools.com/html/html_forms.asp" target="_blank" rel="noopener noreferrer">HTML Forms</a></li>
          <li><a href="https://www.w3schools.com/howto/howto_js_topnav.asp" target="_blank" rel="noopener noreferrer">HTML Navbar</a></li>
          <li><a href="https://www.w3schools.com/html/html_form_input_types.asp" target="_blank" rel="noopener noreferrer">HTML Input Types</a></li>
          <li><a href="https://www.w3schools.com/html/html_images.asp" target="_blank" rel="noopener noreferrer">HTML Images</a></li>
          <li><a href="https://www.w3schools.com/html/html_links.asp" target="_blank" rel="noopener noreferrer">HTML Links</a></li>
          <li><a href="https://www.w3schools.com/html/html_paragraphs.asp" target="_blank" rel="noopener noreferrer">HTML Paragraphs</a></li>
          <li><a href="https://www.w3schools.com/html/html_headings.asp" target="_blank" rel="noopener noreferrer">HTML Headings</a></li>
          <li><a href="https://www.w3schools.com/html/html_lists.asp" target="_blank" rel="noopener noreferrer">HTML Lists</a></li>
        </ul>

        <h2>Basic CSS Styling</h2>
        <ul>
          <li><a href="https://www.w3schools.com/css/css3_buttons.asp" target="_blank" rel="noopener noreferrer">CSS Buttons</a></li>
          <li><a href="https://www.w3schools.com/css/css_form.asp" target="_blank" rel="noopener noreferrer">CSS Forms</a></li>
          <li><a href="https://www.w3schools.com/css/css_navbar.asp" target="_blank" rel="noopener noreferrer">CSS Navbar</a></li>
          <li><a href="https://www.w3schools.com/w3css/w3css_input.asp" target="_blank" rel="noopener noreferrer">CSS Inputs</a></li>
          <li><a href="https://www.w3schools.com/css/css3_images.asp" target="_blank" rel="noopener noreferrer">CSS Images</a></li>
          <li><a href="https://www.w3schools.com/css/css_selectors.asp" target="_blank" rel="noopener noreferrer">CSS Selectors</a></li>
        </ul>

        <p>Using these HTML and CSS basics, you can build any website.</p>
      </div>

      <div className="futher-details">
        For more information visit <a href="https://medstarhis.com/" target="_blank" rel="noopener noreferrer">MedStar HIS</a>.
        <p className="source-web">
          Source code available on <a href="https://github.com/search?q=Hospital%20management&type=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>
    </div>
  );
}

export default Description1;
