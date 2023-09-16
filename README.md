# DiceGame

Live Demo : 

DiceGame is a simple web application built using HTML, CSS, and JavaScript that allows two players to roll dice and compete to reach the highest score. It's a fun and engaging game that's perfect for some friendly competition.

## How to Play

1. Open the DiceGame application in your web browser by launching the `index.html` file.

2. You will see two players, Player 1 and Player 2, on the screen.

3. Click the "Roll Dice" button to roll the dice for each player. The dice will display a random number between 1 and 6.

4. The score for each player is updated with the rolled number. Player 1's score is on the left, and Player 2's score is on the right.

5. Continue clicking the "Roll Dice" button alternately for each player until you decide to stop.

6. The player with the highest score wins the game! Their name will be displayed as the winner.

## Screenshots

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/DiceGame.git
   ```

2. Open the project folder in your preferred code editor.

3. Run `index.html` in your web browser.

## Rules

- Players take turns rolling the dice.
- Rolling a 1 will reset the player's score to zero, and it becomes the other player's turn.
- The first player to reach the specified maximum score (e.g., 100) wins the game.

## Customization

You can customize the maximum score required to win by modifying the `maxScore` variable in the `js/app.js` file:

```javascript
const maxScore = 100; // Change this value to set a different maximum score
```

## Contributing

If you'd like to contribute to DiceGame, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/new-feature
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add new feature"
   ```

4. Push your changes to your fork:

   ```bash
   git push origin feature/new-feature
   ```

5. Create a pull request on the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- DiceGame is a fun project created for entertainment and learning purposes.

- Special thanks to the developers and contributors who have made this game possible.

## Contact

If you have any questions, suggestions, or feedback, please feel free to contact us at [your-email@example.com](mailto:your-email@example.com).

---

**Note:** DiceGame is a recreational project and is not meant for gambling purposes. Please play responsibly.
