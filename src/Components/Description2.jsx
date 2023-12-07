import React from "react";

function Description2() {
  return (
    <div className="afopen">
      <h3>Title - Restaurent Management</h3>
      <h4 className="description-title">Description</h4>
      <p className="description-text">
        Restaurant management involves overseeing the daily operations of a
        dining establishment to ensure efficient functioning and exceptional
        customer service. This multifaceted role includes managing staff,
        inventory, finances, and maintaining quality standards for food and
        service. Restaurant managers handle reservations, create menus,
        supervise kitchen operations, and address customer concerns to enhance
        the dining experience. Effective management necessitates strong
        leadership, organizational skills, and a deep understanding of industry
        trends. By maintaining a balance between front-of-house and
        back-of-house operations, restaurant managers strive to create an
        inviting ambiance while delivering delicious cuisine, fostering customer
        loyalty, and maximizing profitability.
      </p>
      <div className="how2use">
        <h3>Planning and Design:</h3>
        <p>
          <ol>
            <img src="../images/layout.png" alt="#" />
            <li>The website layout should be like above image</li>
            <li>Define the requirements and functionalities of your RMS.</li>
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
              <li>
                Inside this folder, create a virtual environment. Open a
                terminal in VSCode and run: <mark>#python -m venv venv#</mark>
                This will create the virtual python environment in your system
                and to activate the virtual environment
                <mark>.\venv\Scripts\activate</mark>
              </li>
              <li>If this project is in python it is very useful to you..</li>
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
          <h3>Menu Development:</h3>
          <p>
            <ol>
              <li>
                create a menu card by using some html and css if the menu card
                is online add database to store fooditems init..
              </li>
            </ol>
          </p>
          <div className="mimg">
            <h3>Zomato signUp page</h3>
            <p className="mimage">
              <img src="../images/signup.png" alt="" className="code-img" />
              <p className="hsc">signup page source code</p>
              <img src="../images/form.png" alt="" className="code-img" />
            </p>
          </div>
          <div className="mimg">
            <h3>Zomato login page</h3>
            <p className="mimage">
              <img src="../images/login.png" alt="" className="code-img" />
              <p className="hsc">login page source code</p>
              <img src="../images/zlogin.png" alt="" className="code-img" />
            </p>
          </div>
          <div className="mimg">
            <h3>Zomato home page</h3>
            <p className="mimage">
              <img src="../images/zhome.png" alt="" className="code-img" />
              <p className="hsc">home page source code</p>
              <img src="../images/zohome.png" alt="" className="code-img" />
            </p>
          </div>
        </p>
      </div>
      <p className="futher-details">
        For Futher information{" "}
        <a href="https://www.zomato.com/india" target="_blank">
          check this website.
        </a>
        <p className="source-web">
          Provided
          <a
            href="https://github.com/search?q=restaurent+management&type=repositories"
            target="_blank"
          >
            SourceCode
          </a>
        </p>
      </p>
    </div>
  );
}

export default Description2;
