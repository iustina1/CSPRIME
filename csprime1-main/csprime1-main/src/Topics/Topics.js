import React, { useEffect, useState } from "react";
import "./Topics.css"; // Import the CSS for styling
import TopicsDetails from "./TopicsDetails"; // Import the TopicDetails component
import apiClient from "../api/apiClient";

const TopicsPage = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [isDetailsPage, setIsDetailsPage] = useState(false); // Track whether we are on the details page
  const [topics, setTopics] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    apiClient.getTopics()
      .then((data) => {
        setTopics(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  // Handle dropdown change
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  // Handle search button click to navigate to the topic details page
  const handleSearch = () => {
    if (selectedTopic) {
      setIsDetailsPage(true);
    } else {
      alert("Please select a topic to search!");
    }
  };

  if (isDetailsPage) {
    return <TopicsDetails topic={selectedTopic} onBack={() => setIsDetailsPage(false)} />; // Pass onBack function
  }

  if (status === "loading") {
    return <div className="page-container"><div className="content-box"><p>Loading topics...</p></div></div>;
  }

  if (status === "error") {
    return <div className="page-container"><div className="content-box"><p>Unable to load topics. Please try again.</p></div></div>;
  }

  return (
    <div className="page-container">
      <div className="content-box">
        <h1 className="title">Discover a World Full of Topics</h1>
        <p className="subtitle">
          Browse through a variety of topics and explore detailed modules from your CSSE degree.
        </p>

        <div className="dropdown-container">
          <select
            className="dropdown"
            value={selectedTopic}
            onChange={(e) => handleTopicSelect(e.target.value)}
          >
            <option value="">Select a Topic:</option>
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>{topic.name}</option>
            ))}
          </select>
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>

        <p className="quote">"Learning never exhausts the mind." <br /> — Leonardo da Vinci</p>
      </div>
    </div>
  );
};

export default TopicsPage;
