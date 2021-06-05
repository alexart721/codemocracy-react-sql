const { createContext } = require("react");

const topicContext = createContext({
  topics: [],
  createTopic: () => {},
  voteTopic: () => {},
  removeTopic: () => {}
})

export default topicContext;