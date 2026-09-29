import React, { useEffect, useState } from "react";
import "./Analytics.css";
import apiClient from "../api/apiClient";

const foundationModules = ["CS161", "CS162", "CS171", "CS172", "MT101SC", "MT102SC", "MT113SC"];

const Analytics = () => {
  const [selectedModule, setSelectedModule] = useState("CS161");
  const [analytics, setAnalytics] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setStatus("loading");
    apiClient.getModuleAnalytics(selectedModule)
      .then((data) => {
        setAnalytics(data);
        setStatus("success");
      })
      .catch(() => {
        setAnalytics(null);
        setStatus("error");
      });
  }, [selectedModule]);

  return (
    <div className="analytics-container">
      <h2>CSSE Foundational Modules and their Real-world Impact</h2>
      <p>Explore how fundamental CS topics evolve into key industry applications and research advancements.</p>
      <label htmlFor="moduleSelect">Choose a first-year module:</label>
      <select id="moduleSelect" value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)}>
        {foundationModules.map((module) => <option key={module} value={module}>{module}</option>)}
      </select>

      {status === "loading" && <p>Loading analytics...</p>}
      {status === "error" && <p>Unable to load analytics. Please try again.</p>}
      {status === "success" && analytics && (
        <>
          <table className="analytics-table">
            <thead><tr><th>Related Advanced Modules</th><th>Application in Industry/Research</th></tr></thead>
            <tbody>
              {analytics.advancedModules.map((module) => (
                <tr key={module.id}>
                  <td>{module.code}</td>
                  <td>{analytics.applications.map((application) => application.description).join(" ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="skills-section">
            <h3>Key Skills Acquired</h3>
            <ul>{analytics.skills.map((skill) => <li key={skill.id}>✅ {skill.name}</li>)}</ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Analytics;
