import Filepicker from "../../components/Filepicker.jsx";
import Photopicker from "../../components/Photopicker.jsx";
import Videopicker from "../../components/Videopicker.jsx";
import "./VerificationPanel.css";

function VerificationPanel() {
  return (
    <div className="verification-panel">
      <div className="heading">
        <h2>Verification Panel</h2>
      </div>
      <div className="description">
        <p>GO THROUGH TASKS</p>
      </div>
      <table className="tasks-table">
        <thead>
          <tr>
            <th>Donation Id:</th>
            <th>Amount Used:</th>
            <th>Usage Description:</th>
            <th>Proof Status:</th>
            <th>Date:</th>
            <th>Action:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>5000</td>
            <td>Food supplies for families</td>
            <td>Pending</td>
            <td>2023-10-15</td>
            <td>
              <button className="verify-btn">Verify</button>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />
      <h3>Upload Proof of Usage(IPFS)</h3>
      <div className="pickers-container">
        <div className="filepicker">
          <h3>Drop your Bill</h3>
          <Filepicker />
        </div>
        <div className="photopicker">
          <h3>Drop your geolocation image</h3>
          <Photopicker />
        </div>
        <div className="videopicker">
          <h3>Drop your video</h3>
          <Videopicker />
        </div>
      </div>
      <div className="submit-section">
        <div>
          <input type="text" placeholder="Enter Donation ID" />
        </div>
        <div>
          <input type="text" placeholder="Enter Amount Used" />
        </div>
        <div>
          <input type="text" placeholder="Enter Usage Description" />
        </div>
        <button className="submit-btn">Submit Verification</button>
      </div>
    </div>
  );
}

export default VerificationPanel;
