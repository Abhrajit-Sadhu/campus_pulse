import { useState } from "react";

const locations = [
  {
    name: "Library",
    crowd: "Medium",
    noise: "Low",
    seating: "High",
    queue: "Low"
  },
  {
    name: "Food Court",
    crowd: "High",
    noise: "High",
    seating: "Low",
    queue: "High"
  },
  {
    name: "Student Plaza",
    crowd: "High",
    noise: "Medium",
    seating: "Medium",
    queue: "Low"
  },
  {
    name: "Sports Ground",
    crowd: "Low",
    noise: "Medium",
    seating: "Medium",
    queue: "Low"
  },
  {
    name: "Innovation Hub",
    crowd: "Medium",
    noise: "Low",
    seating: "High",
    queue: "Low"
  }
];

function Recommendation() {
  const [preference, setPreference] = useState("");

  const getRecommendation = () => {
    if (preference === "Quiet") {
      return {
        location: "Library",
        reason: "Low noise and high seating availability"
      };
    }

    if (preference === "Food") {
      return {
        location: "Food Court",
        reason: "Best option for food, but currently crowded"
      };
    }

    if (preference === "Open Space") {
      return {
        location: "Sports Ground",
        reason: "Low crowd and open surroundings"
      };
    }

    if (preference === "Social") {
      return {
        location: "Student Plaza",
        reason: "High activity and a social atmosphere"
      };
    }

    return null;
  };

  let bestOption = locations[0];

  for (let i = 1; i < locations.length; i++) {
    if (
      locations[i].noise === "Low" &&
      locations[i].seating === "High"
    ) {
      bestOption = locations[i];
      break;
    }
  }

  return (
    <section className="recommendation">
      <h2>Where should I go?</h2>
      <p>Choose what you are looking for on campus.</p>

      <div className="preference-buttons">
        <button onClick={() => setPreference("Quiet")}>
          Quiet Place
        </button>

        <button onClick={() => setPreference("Food")}>
          Food
        </button>

        <button onClick={() => setPreference("Open Space")}>
          Open Space
        </button>

        <button onClick={() => setPreference("Social")}>
          Social Space
        </button>
      </div>

      <div className="best-option">
        <h3>Best Current Option</h3>
        <h2>{bestOption.name}</h2>
        <p>
          Low noise and high seating availability.
        </p>
      </div>

      {preference && (
        <div className="recommendation-result">
          <h3>Recommended Location</h3>
          <h2>{getRecommendation().location}</h2>
          <p>{getRecommendation().reason}</p>
        </div>
      )}
    </section>
  );
}

export default Recommendation;