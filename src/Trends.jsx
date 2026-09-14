import { useState } from "react";

const trends = [
  {
    time: "Morning",
    activity: "Medium",
    value: 55
  },
  {
    time: "Afternoon",
    activity: "High",
    value: 85
  },
  {
    time: "Evening",
    activity: "Low",
    value: 35
  }
];

function Trends() {
  const [selectedTrend, setSelectedTrend] = useState(null);

  let mostActive = trends[0];

  for (let i = 1; i < trends.length; i++) {
    if (trends[i].value > mostActive.value) {
      mostActive = trends[i];
    }
  }

  return (
    <section className="trends" id="trends">
      <h2>Campus Trends</h2>
      <p>See how campus activity changes throughout the day.</p>

      <div className="trend-grid">
        {trends.map((trend) => (
          <div
            className={`trend-card ${
              selectedTrend?.time === trend.time ? "selected-trend" : ""
            }`}
            key={trend.time}
            onClick={() => setSelectedTrend(trend)}
          >
            <h3>{trend.time}</h3>
            <p>Activity: {trend.activity}</p>

            <div className="trend-bar">
              <div
                className="trend-fill"
                style={{ width: `${trend.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {selectedTrend && (
        <div className="trend-details">
          <h3>{selectedTrend.time} Activity</h3>
          <p>Activity Level: {selectedTrend.activity}</p>
          <p>Campus Activity Score: {selectedTrend.value}%</p>
        </div>
      )}

      <div className="trend-summary">
        <h3>Most Active Period</h3>
        <p>{mostActive.time}</p>
      </div>
    </section>
  );
}

export default Trends;