import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Modules.css"; 
import apiClient from "../api/apiClient";

function Modules() {
  const [modules, setModules] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    apiClient.getModules()
      .then((data) => {
        setModules(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  if (status === "loading") {
    return <div className="container"><h1 className="title">Modules</h1><p>Loading modules...</p></div>;
  }

  if (status === "error") {
    return <div className="container"><h1 className="title">Modules</h1><p>Unable to load modules. Please try again.</p></div>;
  }

  return (
    <div className="container">
      <h1 className="title">Modules</h1>
      <div className="grid-container">
        <div className="grid">
          {modules.map((module) => (
            <Link key={module.id} to={`/modules/${module.code}`} className="card">
              <h2>{module.code}</h2>
              <p>{module.name}</p>
              <span>Semester {module.semester}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modules;
