import Navbar from "./Navbar";
import Locations from "./Locations";
import CampusMap from "./CampusMap";
import Recommendations from "./Recommendations";
import Reports from "./Reports";
import Trends from "./Trends";
import "./App.css";

const campusLocations = [
  { name: "Library", crowd: "Medium" },
  { name: "Food Court", crowd: "High" },
  { name: "Student Plaza", crowd: "High" },
  { name: "Sports Ground", crowd: "Low" },
  { name: "Innovation Hub", crowd: "Medium" }
];

let totalScore = 0;
let busyLocations = 0;

for (let location of campusLocations) {
  if (location.crowd === "Low") {
    totalScore += 90;
  } else if (location.crowd === "Medium") {
    totalScore += 60;
  } else {
    totalScore += 30;
    busyLocations++;
  }
}

const averageScore = Math.round(totalScore / campusLocations.length);

const campusStats = {
  activity: averageScore >= 70 ? "Low" : averageScore >= 50 ? "Moderate" : "High",
  pulseScore: averageScore,
  busyLocations: busyLocations
};

function App() {
  return (
    <div>
      <Navbar />

      <main className="dashboard" id="dashboard">
  <div className="hero">
    <div>
      <h1>Campus Pulse</h1>
      <p>See what's happening around campus right now.</p>
    </div>

    <div className="pulse-status">
      <span></span>
      Campus Pulse Active
    </div>
  </div>

        <div className="stats">
  <div className="stat-card">
  <h3>Campus Activity</h3>
  <p>{campusStats.activity}</p>
  <span>Based on current campus conditions</span>
</div>

<div className="stat-card">
  <h3>Pulse Score</h3>
  <p>{campusStats.pulseScore}%</p>

  <div className="pulse-bar">
    <div
      className="pulse-fill"
      style={{ width: `${campusStats.pulseScore}%` }}
    ></div>
  </div>

  <span>Overall campus comfort score</span>
</div>

<div className="stat-card">
  <h3>Busy Locations</h3>
  <p>{campusStats.busyLocations}</p>
  <span>Currently above normal activity</span>
</div>
</div>

        <Locations />
        <CampusMap />
        <Recommendations />
        <Reports />
        <Trends />
        
      </main>
    </div>
  );
}

export default App;