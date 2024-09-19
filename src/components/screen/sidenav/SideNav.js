import React from "react";
import { useSelector } from "react-redux";
import "./SideNav.css";

const SideNav = ({ onTopicClick, selectedTopicIndex }) => {
  const dsaTopics = useSelector((state) => state.dsaTopics?.topics);

  if (!dsaTopics) {
    return <div className="sidebar">No topics available</div>;
  }

  return (
    <div className="sidebar">
      <h1 className="heading">DSA Topics</h1>
      <ul>
        {dsaTopics.map((topic, topicIndex) => (
          <li key={topicIndex}>
            <button
              className={selectedTopicIndex === topicIndex ? "active" : ""}
              onClick={() => onTopicClick(topicIndex)}
            >
              {topic.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;


