export const loadGameState = () => {
  const savedGameState = localStorage.getItem("ticTacToeGameState");
  if (savedGameState) {
    return JSON.parse(savedGameState);
  }
  return null;
};
