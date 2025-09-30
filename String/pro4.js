// Take a string and a character from the user and:
// a) count how many times that character appears in the string.
// b) Case-Insensitive Version
// c) Find All Occurrence Positions


let count1=function(str,char){
    let count=0
   while(str.includes(char)){
    str=str.replace(char,"");
    count++;
   }
   return count;
}

let occurencePosition=function(str,char){
    let pos=[];
    str.split("").forEach((ele,idx) => {
        if(ele===char)pos.push(idx)
        
    });
    return pos
}

console.log(occurencePosition("aada Pada","a"))