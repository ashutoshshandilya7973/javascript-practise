/**
 *  1. Create an array that contains the variables Rock, Paper, and Scissors.
 2. Set up a variable that generates a random number 0-2 for the player and then 
do the same for the computer's selection. The number represents the index 
values in the array of the 3 items.
 3. Create a variable to hold a response message to the user. This can show the 
random results for the player and then also the result for the computer of the 
matching item from the array. 
4. Create a condition to handle the player and computer selections. If both are 
the same, this results in a tie. 
5. Use conditions to apply the game logic and return the correct results. 
There are several ways to do this with the condition statements, but you 
could check which player's index value is bigger and assign the victory 
accordingly, with the exception of Rock beating Scissors.
 6. Add a new output message that shows the player selection versus the 
computer selection and the result of the game.
 */

let game = ["Rock", "Paper", "scissor"];
let check = true;
let message = "";
let round=1;
while (check) {
    console.log(`this is round ${round++}`)
    let user = Math.floor((Math.random() * 10) % 3);
    let computer = Math.floor((Math.random() * 10) % 3);
    if (user == computer) {
        continue;
    } else if ((user == 0 || computer == 0) && (user == 2 || computer == 2)) {
        message = user == 0 ? "user is the winner" : "computer is the winner";
        check = false;
    } else if ((user == 2 || computer == 2) && (user == 1 || computer == 1)) {
        message = user == 2 ? "user is the winner" : "computer is the winner";
        check = false;
    } else if ((user == 0 || computer == 0) && (user == 1 || computer == 1)) {
        message = user == 2 ? "user is the winner" : "computer is the winner";
        check = false;

    }
}
console.log(message)