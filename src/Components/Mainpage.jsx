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
            <td></td>
            <td></td>
            {/* onchange={(e) => setApplication(e.target.value)} */}
            <td>Row 1, Cell 3</td>
            <td>
              <input type="file" accept="application/pdf" />
              {/* onchange={(e) => setFile(e.target.files[0])} */}
            </td>
            <td>Row 1, Cell 5</td>
            <td>Row 1, Cell 6</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
            <td>Row 2, Cell 4</td>
            <td>Row 2, Cell 5</td>
            <td>Row 2, Cell 6</td>
          </tr>
          <tr>
            <td>Row 3, Cell 1</td>
            <td>Row 3, Cell 2</td>
            <td>Row 3, Cell 3</td>
            <td>Row 3, Cell 4</td>
            <td>Row 3, Cell 5</td>
            <td>Row 3, Cell 6</td>
          </tr>
          <tr>
            <td>Row 4, Cell 1</td>
            <td>Row 4, Cell 2</td>
            <td>Row 4, Cell 3</td>
            <td>Row 4, Cell 4</td>
            <td>Row 4, Cell 5</td>
            <td>Row 4, Cell 6</td>
          </tr>
          <tr>
            <td>Row 5, Cell 1</td>
            <td>Row 5, Cell 2</td>
            <td>Row 5, Cell 3</td>
            <td>Row 5, Cell 4</td>
            <td>Row 5, Cell 5</td>
            <td>Row 5, Cell 6</td>
          </tr>
          <tr>
            <td>Row 6, Cell 1</td>
            <td>Row 6, Cell 2</td>
            <td>Row 6, Cell 3</td>
            <td>Row 6, Cell 4</td>
            <td>Row 6, Cell 5</td>
            <td>Row 6, Cell 6</td>
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
