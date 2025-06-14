/**
 *  1. Start by setting a variable that gets a random value assigned to it. The value 
is assigned by generating a random number 0-5, for 6 possible results. You 
can increase this number as you add more results.
 2. Create a prompt that can get a string value input from a user that you can 
repeat back in the final output.
 3. Create 6 responses using the switch statement, each assigned to a different 
value from the random number generator.   
4. Create a variable to hold the end response, which should be a sentence 
printed for the user. You can assign different string values for each case, 
assigning new values depending on the results from the random value.
 5. Output the user's original question, plus the randomly selected case 
response, to the console after the user enters their question.
 */
let question=["what is your name","what is your father name","what is your mother name","what is your sister name","what is your brother name","what is your wife name"]
let guessNumber=Math.floor((Math.random()*10)%5);
let userGuess=6;
let message=""
switch(userGuess){

    case 0:
        message=question[userGuess];
        break;
    case 1:
        message=question[userGuess];
        break;
    case 2:
        message=question[userGuess];
        break;
    case 3:
        message=question[userGuess];
        break;
    case 4:
        message=question[userGuess];
        break;
    case 5:
        message=question[userGuess];
        break;
    default:
        message="no valid question is asked";



    }
    console.log(question[guessNumber]);
    console.log(message)