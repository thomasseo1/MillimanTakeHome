# Milliman Tic-Tac-Toe

## Description
This application is a personalized Tic Tac Toe game dedicated to Milliman MedInsight. It was built using **JavaScript** and **React**, with **Jest** and **React Testing Library** for testing purposes. The application itself is very simple but though out with the intention of being clean and maintainable.

Looking at the file structure of the game, I aimed to highlight its modularity and its separation of concerns. Whether building a small or large application, keeping these concerns in mind allows for more growth and scalability for future development.

My biggest challenge while developing this application was achieving 100% test coverage. While not always necessary, I wanted to ensure the smoothness of the application. Given more time, I would like to implement more specific tests and introduce an AI computer opponent. Nonetheless, I am grateful for the opportunity and proud of the work I've made. Thank you for the opportunity, and I hope you enjoy the game!"

## Rules
- Players X and O each take turns selecting an empty square on the board to mark.
- Players can win the game if they mark 3 squares in a row either horizontally, vertically, or diagonally.
- If no player is able to mark 3 squares in a row and all squares are filled, the game ends in a draw.
- Goodluck! ✨

## Component Structure
![Component Structure](https://github.com/thomasseo1/MillimanTakeHome/blob/main/tictactoe/public/structure.png?raw=true)

## Additional features added
- Pretty color transitions with Milliman's color palette.
- Scoreboard of winners
- Able to resume game from where you left off after closing the page
- Tests with Jest & React Testing Library
- Play Again button
- Reset Game button to clear scoreboard, the game board, and localStorage

## Getting Started
### Clone this repository
```
git clone https://github.com/thomasseo1/MillimanTakeHome.git
```

### Install dependencies
```
npm install
```
### Run the application
```
npm start
```
- Open http://localhost:3000 to view it in your browser.
### Run tests
```
npm test
```
