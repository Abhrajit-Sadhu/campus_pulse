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

function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <section className="locations" id="locations">
      <h2>Campus Locations</h2>
      <p>Current conditions across popular campus spots.</p>

      <div className="location-grid">
        {locations.map((location) => (
          <div
            className={`location-card ${
  selectedLocation?.name === location.name ? "selected" : ""
}`}
            onClick={() => setSelectedLocation(location)}
            key={location.name}
          >
            <h3>{location.name}</h3>

            <div className="info">
              <span>Crowd</span>
              <strong className={location.crowd.toLowerCase()}>
                {location.crowd}
              </strong>
            </div>

            <div className="info">
              <span>Noise</span>
              <strong className={location.noise.toLowerCase()}>
                {location.noise}
              </strong>
            </div>

            <div className="info">
              <span>Seating</span>
              <strong className={location.seating.toLowerCase()}>
                {location.seating}
              </strong>
            </div>

            <div className="info">
              <span>Queue</span>
              <strong className={location.queue.toLowerCase()}>
                {location.queue}
              </strong>
            </div>
          </div>
        ))}
      </div>

      {selectedLocation && (
        <div className="selected-location">
          <h3>{selectedLocation.name}</h3>

          <div className="info">
            <span>Crowd</span>
            <strong className={selectedLocation.crowd.toLowerCase()}>
              {selectedLocation.crowd}
            </strong>
          </div>

          <div className="info">
            <span>Noise</span>
            <strong className={selectedLocation.noise.toLowerCase()}>
              {selectedLocation.noise}
            </strong>
          </div>

          <div className="info">
            <span>Seating</span>
            <strong className={selectedLocation.seating.toLowerCase()}>
              {selectedLocation.seating}
            </strong>
          </div>

          <div className="info">
            <span>Queue</span>
            <strong className={selectedLocation.queue.toLowerCase()}>
              {selectedLocation.queue}
            </strong>
          </div>
        </div>
      )}
    </section>
  );
}

export default Locations;