import { useState } from "react";

const locations = [
  {
    name: "Library",
    type: "Study Area",
    status: "Medium",
    noise: "Low",
    seating: "High"
  },
  {
    name: "Food Court",
    type: "Food & Dining",
    status: "High",
    noise: "High",
    seating: "Low"
  },
  {
    name: "Student Plaza",
    type: "Social Area",
    status: "High",
    noise: "Medium",
    seating: "Medium"
  },
  {
    name: "Sports Ground",
    type: "Sports",
    status: "Low",
    noise: "Medium",
    seating: "Medium"
  },
  {
    name: "Innovation Hub",
    type: "Technology",
    status: "Medium",
    noise: "Low",
    seating: "High"
  }
];

function CampusMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <section className="campus-map" id="map">
      <h2>Campus Map</h2>
      <p>Explore important locations and their current activity levels.</p>

      <div className="map-layout">
  {locations.map((location, index) => (
    <div
      className={`map-location map-position-${index} ${location.status.toLowerCase()} ${
        selectedLocation?.name === location.name ? "map-selected" : ""
      }`}
      key={location.name}
      onClick={() => setSelectedLocation(location)}
    >
      <h3>{location.name}</h3>
      <span>{location.type}</span>
      <p>Activity: {location.status}</p>
    </div>
  ))}
</div>

      {selectedLocation && (
        <div className="map-details">
          <h3>{selectedLocation.name}</h3>
          <p>Type: {selectedLocation.type}</p>
          <p>Activity: {selectedLocation.status}</p>
          <p>Noise: {selectedLocation.noise}</p>
          <p>Seating: {selectedLocation.seating}</p>
        </div>
      )}
    </section>
  );
}

export default CampusMap;