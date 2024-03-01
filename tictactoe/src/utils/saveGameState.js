export const saveGameState = (state) => {
	localStorage.setItem("ticTacToeGameState", JSON.stringify(state));
};