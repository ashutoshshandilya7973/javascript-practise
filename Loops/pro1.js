/**
 *  1. Create a variable to be used as the max value for the number guessing game.
 2. Generate a random number for the solution using Math.random() and 
Math.floor(). You will also need to add 1 so that the value is returned as 
1-[whatever the set max value is]. You can log this value to the console for 
development to see the value as you create the game, then when the game is 
complete you can comment out this console output.
 
 3. Create a variable that will be used for tracking whether the answer is correct 
or not and set it to a default Boolean value of false. We can update it to be 
true if the user guess is a match.  
4. Use a while loop to iterate a prompt that asks the user to enter a number 
between 1 and 5, and convert the response into a number in order to match 
the data type of the random number.
 5. Inside the while loop, check using a condition to see if the prompt value is 
equal to the solution number. Apply logic such that if the number is correct, 
you set the status to true and break out of the loop. Provide the player with 
some feedback as to whether the guess was high or low, and initiate another 
prompt until the user guesses correctly. In this way we use the loop to keep 
asking until the solution is correct, and at that point we can stop the iteration 
of the block of code
 */


let randomNumber=Math.floor((Math.random()*10+1))
let check=true;
while(check){
    let userGuess=Math.floor((Math.random()*10+1));
    if(userGuess==randomNumber){
        console.log("your guess is correct ");
        check=false;
    }else if(userGuess>randomNumber){
        console.log("your guess is higher ")
    }else {
        console.log("your guess is lower")
    }
}