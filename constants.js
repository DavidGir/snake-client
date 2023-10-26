const IP = "165.227.47.243";
const PORT = 50541;

// Movement keys as constants:
const MOVE_UP_KEY = "w";
const MOVE_DOWN_KEY = "s";
const MOVE_LEFT_KEY = "a";
const MOVE_RIGHT_KEY = "d";

// canned messages in an object to refactor code:
const cannedMessages = {
  '1': "So long Sucka!",
  '2': "GG!",
  '3': "Oh NOO!",
  '4': "Beat it kid!",
  '5': "😂",
  '6': "🐍"
};


module.exports = {
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  cannedMessages
};