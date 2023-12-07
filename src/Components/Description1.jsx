import React from "react";
import AceEditor from "react-ace";
// import "ace-build/src-noconflict/theme-dracula";

function Description1() {
  return (
    <div className="afopen">
      <h3>HospitalManagement</h3>
      <br />
      <p className="description-text">
        Hospital management involves overseeing the efficient functioning of
        medical facilities by coordinating various aspects like staffing,
        finances, operations, and patient care. It encompasses strategic
        planning, resource allocation, and ensuring adherence to regulatory
        standards to optimize healthcare delivery. Effective management involves
        supervising staff, maintaining quality care, managing budgets,
        implementing technological advancements, and fostering a patient-centric
        environment. It aims to streamline administrative processes, enhance
        patient experiences, and improve overall healthcare outcomes through
        systematic organization and coordination within the hospital setting.
      </p>
      <div className="how2use">
        <h3>Planning and Design:</h3>
        <p>
          <ol>
            <img src="../images/layout.png" alt="#" />
            <li>The website layout should be like above image</li>
            <li>Define the requirements and functionalities of your HMS.</li>
            <li>
              Design the system architecture, including databases, user
              interfaces, and backend logic.
            </li>
          </ol>
          <h3>Setting up the Environment:</h3>
          <p>
            <ol>
              <li>
                Install necessary software like Python, Node.js, or any other
                language and framework you prefer.
              </li>
              <li>
                Set up a database management system (like MySQL, PostgreSQL, or
                MongoDB) if your system requires a database.
              </li>
              <li>
                To setup the environment you need to install VScode application
                it helps user to write and run their code he/she can also
                install some extensions init that was very helpful..
                <a href="https://code.visualstudio.com/download">
                  From here you can download it
                </a>
              </li>
            </ol>
          </p>
          <h3>Backend Development:</h3>
          <p>
            <ol>
              <li>
                Create backend logic for handling functionalities like patient
                management, appointments, billing, etc.
              </li>
              <li>
                Use frameworks like Flask (Python), Express (Node.js), Django
                (Python), Spring (Java), etc., to facilitate backend
                development.
              </li>
              <li>
                Implement data models, APIs, and authentication mechanisms.
              </li>
            </ol>
          </p>
          <h3>Frontend Development:</h3>
          <ol>
            <li>
              Use HTML, CSS, JavaScript, and frontend frameworks like React,
              Angular, or Vue.js to build the UI components.
            </li>
            <li>
              <a href="https://www.learnvern.com/" target="_blank">
                If you want to learn the Frontend Development visite this
                website
              </a>
            </li>
          </ol>
          <h3>Database Management:</h3>
          <p>
            <ol>
              <li>
                Design and create a database schema that supports your
                application's data needs.
              </li>
              <li>
                Implement CRUD (Create, Read, Update, Delete) operations for
                managing patient records, appointments, etc.
              </li>
            </ol>
          </p>
          <h3>Integration and Testing:</h3>
          <p>
            <ol>
              <li>Integrate frontend and backend components.</li>
            </ol>
          </p>
          <div className="mimg">
            <h3>Home Page</h3>
            <p className="mimage">
              <img src="../images/HMSHome.png" alt="" className="code-img" />
              <p className="hsc">Homepage source code</p>
              <img
                src="../images/HMSsourcecode.png"
                alt=""
                className="code-img"
              />
            </p>
          </div>
          <div className="mimg">
            <h3>About Page</h3>
            <p className="mimage">
              <img src="../images/HMSabout.png" alt="" className="code-img" />
              <p className="hsc">Aboutpage source code</p>
              <img src="../images/about.png" alt="" className="code-img" />
            </p>
          </div>
          <div className="mimg">
            <h3>Form Page</h3>
            <p className="mimage">
              <img src="../images/HMSForm.png" alt="" className="code-img" />
              <p className="hsc">signup page source code</p>
              <img src="../images/form.png" alt="" className="code-img" />
            </p>
          </div>
        </p>
      </div>
      <p className="futher-details">
        For Futher information{" "}
        <a href="https://medstarhis.com/" target="_blank">
          check this website.
        </a>
        <p className="source-web">
          Provided
          <a
            href="https://github.com/search?q=Hospital%20management&type=repositories"
            target="_blank"
          >
            SourceCode
          </a>
        </p>
      </p>
    </div>
  );
}

export default Description1;
