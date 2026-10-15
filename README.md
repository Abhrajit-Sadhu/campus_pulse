# Campus Pulse 🎓

**A Smart Campus Activity and Comfort Dashboard**

Campus Pulse is a React-based web application designed to help students explore campus locations, understand their activity levels, and identify comfortable places to study, relax, or spend time between classes.

The project presents campus information through an interactive dashboard with location cards, activity statistics, recommendations, reports, and trend visualizations.

## ✨ Features

### 📊 Campus Dashboard
- Displays an overview of campus activity.
- Shows a calculated Pulse Score representing overall campus comfort.
- Highlights locations with higher activity levels.
- Presents key information in dashboard cards.

### 📍 Campus Locations
- Displays information about popular campus locations.
- Shows crowd level, noise level, seating availability, and queue level.
- Allows users to select a location and view its details.

### ⭐ Favourite Locations
- Allows users to mark locations as favourites.
- Provides an option to display only favourite locations.
- Saves favourite selections using browser local storage.
- Preserves favourites across page refreshes.

### 🗺️ Campus Map
- Provides a visual representation of campus locations.
- Helps users explore the different areas represented in the dashboard.

### 💡 Recommendations
- Provides suggestions based on the available campus conditions.
- Helps users identify potentially suitable places for their activities.

### 📝 Student Reports
- Provides a form for submitting campus-related reports.
- Supports collecting information about reported campus conditions.

### 📈 Campus Trends
- Presents visual summaries of campus activity.
- Helps users compare activity levels across locations.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structures the web page |
| CSS3 | Styles the interface, cards, layout, and responsive elements |
| JavaScript (ES6+) | Implements application logic and data processing |
| React | Builds reusable UI components and manages interface state |
| Vite | Provides the development server and build tooling |
| Browser Local Storage | Persists favourite locations |

## 📂 Project Structure

```text
campus_pulse/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── Navbar.jsx
│   ├── Locations.jsx
│   ├── CampusMap.jsx
│   ├── Recommendation.jsx
│   ├── Reports.jsx
│   ├── Trends.jsx
│   ├── main.jsx
│   └── assets/
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

*Note: This structure represents the main files. Additional files or folders may be present in your local project.*

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### Installation

**1. Clone the repository**

```bash
git clone <your-github-repository-url>
```

**2. Navigate to the project directory**

```bash
cd campus_pulse
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the local URL displayed in the terminal, usually:

```text
http://localhost:5173/
```

Keep the terminal running while using the development website.

On Windows PowerShell, if the `npm` command is blocked by a script execution policy, try `npm.cmd install` and `npm.cmd run dev`.

## 🧠 React Concepts Used

Campus Pulse provides practical experience with fundamental React concepts, including:

- **Components:** Dividing the interface into reusable sections.
- **JSX:** Writing HTML-like markup inside JavaScript.
- **Props and component composition:** Organizing the interface into separate components.
- **State management:** Using React's `useState` hook to manage interactive features.
- **Side effects:** Using `useEffect` to synchronize favourite selections with local storage.
- **Event handling:** Responding to user interactions such as clicks and form submissions.
- **Conditional rendering:** Displaying content based on application state.
- **Array methods:** Using methods such as `map()` and `filter()` to render and filter location data.
- **Dynamic styling:** Applying CSS classes according to location conditions.

## 🎯 Project Objective

The objective of Campus Pulse is to explore how a simple web dashboard can make campus information easier to understand and navigate.

The project also demonstrates the use of modern frontend technologies to build a structured, interactive, and user-friendly website.

## ⚠️ Current Limitations

- Campus conditions are represented using **sample demonstration data**.
- The application does not currently receive live data from campus sensors, CCTV systems, or an official university database.
- Recommendations and dashboard statistics depend on the data and logic implemented in the application.
- Student reports are handled by the frontend and are not necessarily stored in a permanent database.
- The campus map is a visual representation rather than a live, GPS-enabled campus navigation system.

These limitations can be addressed in future versions by integrating verified campus data, a backend service, and suitable real-time data sources.

## 🔮 Future Improvements

- Add a search bar to find campus locations quickly.
- Introduce more advanced filtering and sorting options.
- Integrate verified real-time campus activity data.
- Add a backend database for storing student reports.
- Improve recommendations using historical activity patterns.
- Enhance accessibility and mobile responsiveness.
- Explore predictive analytics for estimating campus crowd levels.

## 👨‍💻 Project Information

**Project:** Campus Pulse  
**Type:** Single-page web application  
**Frontend:** React + Vite  
**Purpose:** Campus activity visualization and student convenience

---

*Campus Pulse — Making campus life easier, one pulse at a time.*
