import React from "react";
import "../Styles/Mainpage.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Mainpage() {
  // const [application, setApplication] = useState("");
  // const [file, setFile] = useState("");
  // const submitImage = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("application", application);
  //   formData.append("file", file);
  //   console.log(application, file);
  // };
  return (
    <div className="upper">
      <nav className="container3">
        <input
          type="search"
          name="search"
          className="search-contain"
          placeholder="Search Applications"
        />
        <button className="bt-login">Login</button>
      </nav>
      <div className="container4">
        <table class="custom-table">
          <tr>
            <th>Sno</th>
            <th>Application Name</th>
            <th>Group Name</th>
            <th>Zip Files</th>
            <th>Preview</th>
            <th>Rating</th>
          </tr>
          <tr>
            <td>1</td>
            <td>HospitalManagement</td>
            <td>HM</td>
            <td>File</td>
            <td>Documentation</td>
            <td>
              <input type="number" min={1} max={10} />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>RestaurentManagement</td>
            <td>HM</td>
            <td>File</td>
            <td>Documentation</td>
            <td>
              <input type="number" min={1} max={10} />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>HouseRentelManagement</td>
            <td>HM</td>
            <td>File</td>
            <td>Documentation</td>
            <td>
              <input type="number" min={1} max={10} />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>HostelManagement</td>
            <td>HM</td>
            <td>File</td>
            <td>Documentation</td>
            <td>
              <input type="number" min={1} max={10} />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>LibraryManagement</td>
            <td>HM</td>
            <td>File</td>
            <td>Documentation</td>
            <td>
              <input type="number" min={1} max={10} />
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>FlashCards</td>
            <td>FC</td>
            <td>File</td>
            <td>Documentation</td>
            <td>
              <input type="number" min={1} max={10} />
            </td>
          </tr>
        </table>
      </div>
      <div className="upload">
        <Link to="/Secondpage" style={{ textDecoration: "none" }}>
          <button className="b-log">Upload Your Aplications</button>
        </Link>
        {/* onSubmit= */}
        {/* {submitImage} */}
      </div>
    </div>
  );
}

export default Mainpage;
