const list=["milk","banana","bread"];
console.log(list.length)

list[1]="mango";
for(let i=0;i<list.length;i++){
    console.log(list[i])
}


//if the value is not present on the specific index then

list[5]="ashu";
for(let i=0;i<list.length;i++){
    console.log(list[i])
}