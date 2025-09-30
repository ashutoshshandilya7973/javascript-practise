// Create a program to take full name from user and generate a username start
// with @, followed by their full name and ends with underscore followed by the
// length of full name.

const userName=(name)=>{
    let temp=name.toLowerCase();
    let temp1=name.replaceAll(" ","")
    return `@${temp1}_${name.length}`;
}

const ashu=userName("Ashutosh Shandilya")
console.log(ashu)