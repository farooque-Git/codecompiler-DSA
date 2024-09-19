import { createSlice } from "@reduxjs/toolkit";
import dsaTopics from "../../components/data/dsaTopics";

const initialState = {
  topics: dsaTopics,
};

const dsaSlice = createSlice({
  name: "dsaTopics",
  initialState,
  reducers: {
    toggleCompletion: (state, action) => {
      const { topicIndex, subtopicIndex } = action.payload;
      const subtopic = state.topics[topicIndex].subtopics[subtopicIndex];
      subtopic.completed = !subtopic.completed;
    },
  },
});

export const { toggleCompletion } = dsaSlice.actions;

export default dsaSlice.reducer;
