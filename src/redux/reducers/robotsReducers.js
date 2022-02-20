import actionTypes from "../actions/actionTypes";

const robotsReducers = (currentRobots = [], action = {}) => {
  let newRobots;
  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;
    case actionTypes.loadOneRobot:
      newRobots = [action.robots];
      break;
    case actionTypes.deleteRobot:
      newRobots = currentRobots.filter((robot) => action.id !== robot.id);
      break;
    default:
      newRobots = [...currentRobots];
      break;
  }
  return newRobots;
};

export default robotsReducers;
