import React, { useEffect, useState } from "react";
import "./TopicsDetails.css"; // Import the CSS for styling
import apiClient from "../api/apiClient";

const TopicDetails = ({ topic, onBack }) => {
  const [modules, setModules] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    apiClient.getModulesByTopic(topic)
      .then((data) => {
        setModules(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, [topic]);

  return (
    <div className="details-container">
      <h2 className="details-title">{topic} Modules</h2>

      {status === "loading" && <p>Loading modules...</p>}
      {status === "error" && <p>Unable to load modules. Please try again.</p>}

      <div className="modules-wrapper">
        {status === "success" && modules.length > 0 ? (
          modules.map((module, index) => (
            <div key={index} className="module-box">
              <h3 className="module-title">{module.name}</h3>
              <p className="details-info"><strong>Code:</strong> {module.code}</p>
              <p className="details-info"><strong>Year:</strong> {module.year}</p>
              <p className="details-info"><strong>Semester:</strong> {module.semester}</p>
            </div>
          ))
        ) : (
          <p>No modules available for this topic.</p>
        )}
      </div>

      <button className="back-button" onClick={onBack}>Go Back</button>
    </div>
  );
};

export default TopicDetails;
