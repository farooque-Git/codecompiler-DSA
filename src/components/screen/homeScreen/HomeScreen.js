import React, { useState } from "react";
import { useSelector } from "react-redux";

import Center from "../center/Center";
import "./HomeScreen.css";
import SideNav from "../sidenav/SideNav";

const HomeScreen = () => {
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(null);

  // Fetch dsaTopics from Redux store
  const dsaTopics = useSelector((state) => state.dsaTopics?.topics);

  const handleTopicClick = (index) => {
    setSelectedTopicIndex(index);
  };

  // Get the selected topic from the Redux store
  const selectedTopic = dsaTopics ? dsaTopics[selectedTopicIndex] : null;

  return (
    <div className="homescreen-container">
      <SideNav
        onTopicClick={handleTopicClick}
        selectedTopicIndex={selectedTopicIndex}
      />
      <Center selectedTopic={selectedTopic} />
    </div>
  );
};

export default HomeScreen;
