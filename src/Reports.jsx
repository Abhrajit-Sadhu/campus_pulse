import { useState } from "react";

function Reports() {
  const [location, setLocation] = useState("");
  const [issue, setIssue] = useState("");
  const [report, setReport] = useState("");
  const [reports, setReports] = useState([]);

  const submitReport = () => {
  if (location === "" || issue === "") {
    setReport("Please select a location and issue.");
    return;
  }

  const newReport = {
    location: location,
    issue: issue
  };

  setReports([...reports, newReport]);
  setReport(`Report submitted: ${issue} at ${location}.`);
};

  return (
    <section className="reports" id="reports">
      <h2>Student Reports</h2>
      <p>Help keep Campus Pulse updated by reporting what you notice.</p>

      <div className="report-form">
        <label>Location</label>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select a location</option>
          <option value="Library">Library</option>
          <option value="Food Court">Food Court</option>
          <option value="Student Plaza">Student Plaza</option>
          <option value="Sports Ground">Sports Ground</option>
          <option value="Innovation Hub">Innovation Hub</option>
        </select>

        <label>What did you notice?</label>

        <select
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        >
          <option value="">Select an issue</option>
          <option value="High Crowd">High Crowd</option>
          <option value="High Noise">High Noise</option>
          <option value="Low Seating">Low Seating</option>
          <option value="Long Queue">Long Queue</option>
        </select>

        <button onClick={submitReport}>
          Submit Report
        </button>
      </div>

      {report && (
        <div className="report-result">
          <p>{report}</p>
        </div>
      )}
      {reports.length > 0 && (
  <div className="submitted-reports">
    <h3>Recent Reports</h3>

    {reports.map((item, index) => (
      <div className="submitted-report" key={index}>
        <strong>{item.location}</strong>
        <span>{item.issue}</span>
      </div>
    ))}
  </div>
)}
    </section>
  );
}

export default Reports;