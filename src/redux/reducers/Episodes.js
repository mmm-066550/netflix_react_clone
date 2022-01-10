const Episodes = (episodes = [], action) => {
  if (action.type === "GET_TV_EPISODES") {
    return [...episodes, action.payload].sort();
  }
  return [];
};

export default Episodes;
