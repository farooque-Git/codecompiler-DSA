import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Center.css";
import { Link } from "react-router-dom";

const Center = ({ selectedTopic }) => {
  const [activeTab, setActiveTab] = useState("Easy");
  const [completedStatus, setCompletedStatus] = useState({});

  // mark as done store in localStorage
  useEffect(() => {
    const savedState =
      JSON.parse(localStorage.getItem("completedStatus")) || {};
    if (savedState) {
      setCompletedStatus(savedState);
    }
  }, []);

  // Save completion status to localStorage
  const handleCheckboxChange = (questionId) => {
    const newStatus = {
      ...completedStatus,
      [questionId]: !completedStatus[questionId], // Toggle the completed state
    };
    setCompletedStatus(newStatus);
    localStorage.setItem("completedStatus", JSON.stringify(newStatus));
  };

  if (!selectedTopic || !selectedTopic.subtopics) {
    return (
      <div className="select-topic">
        Select a DSA topic and Start solving question.
      </div>
    );
  }

  // Filter subtopics based on the selected difficulty (Easy/Medium/Hard)
  const filteredSubtopics = selectedTopic.subtopics.filter(
    (subtopic) => subtopic.difficulty === activeTab
  );

  return (
    <div className="center-con">
      <div className="center">
        <h4 className="center__title">{selectedTopic.title}</h4>

        {/* Difficulty Tabs */}
        <div className="center__tabs">
          <button
            onClick={() => setActiveTab("Easy")}
            className={`center__tab-button ${
              activeTab === "Easy" ? "center__tab-button--active" : ""
            }`}
          >
            Easy
          </button>
          <button
            onClick={() => setActiveTab("Medium")}
            className={`center__tab-button ${
              activeTab === "Medium" ? "center__tab-button--active" : ""
            }`}
          >
            Medium
          </button>
          <button
            onClick={() => setActiveTab("Hard")}
            className={`center__tab-button ${
              activeTab === "Hard" ? "center__tab-button--active" : ""
            }`}
          >
            Hard
          </button>
        </div>

        <div className="center__content">
          <div className="center__content-left">
            <ul className="center__list">
              {filteredSubtopics.length > 0 ? (
                filteredSubtopics.map((subtopic, subtopicIndex) => (
                  <li key={subtopic.questionId} className="center__list-item">
                    <h3>DSA Problem: {subtopic.title}</h3>
                    <p>
                      <iframe
                        width="100%"
                        height="200"
                        src={subtopic.youtubeLink.replace("watch?v=", "embed/")}
                        title={subtopic.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </p>
                    <p>
                      <a
                        href={subtopic.leetcodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="center__link"
                      >
                        LeetCode Problem
                      </a>
                    </p>
                    <p>
                      <a
                        href={subtopic.articleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="center__link"
                      >
                        See article on this topic
                      </a>
                    </p>
                    <p
                      style={{
                        color: completedStatus[subtopic.questionId]
                          ? "green"
                          : "red",
                      }}
                    >
                      Status:{" "}
                      {completedStatus[subtopic.questionId]
                        ? "Completed"
                        : "Not Completed"}
                    </p>

                    <label className="checkbox">
                      Mark as Done
                      <input
                        type="checkbox"
                        checked={!!completedStatus[subtopic.questionId]}
                        onChange={() =>
                          handleCheckboxChange(subtopic.questionId)
                        }
                      />
                    </label>
                  </li>
                ))
              ) : (
                <li>No {activeTab} problems available for this topic.</li>
              )}
            </ul>
          </div>

          <div className="center__content-right">
            {filteredSubtopics.length > 0 ? (
              filteredSubtopics.map((subtopic, subtopicIndex) => (
                <div key={subtopicIndex}>
                  {subtopic.problem && (
                    <div className="pro-head">
                      <h3>Problem:</h3>
                      <p>{subtopic.problem}</p>
                    </div>
                  )}
                  {subtopic.example && (
                    <div>
                      <h3>Example:</h3>
                      <pre className="center__example">{subtopic.example}</pre>
                    </div>
                  )}
                  <Link to="/codeeditor">
                    <button className="solve-btn">Start Solving</button>
                  </Link>
                </div>
              ))
            ) : (
              <p>No details available for {activeTab} problems.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
