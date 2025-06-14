let list=new Array("orange","banana","guava","banana");

list.push("apple");
// for(let i=0;i<list.length;i++){
//     console.log(list[i]);
// }

// using of splice function of array

list.splice(2,0,"hidh","jdf");
console.log("  ")
// for(let i=0;i<list.length;i++){
//     console.log(list[i]);
// }
// console.log("  ")

list.splice(2,2,"hdgfh","ajvfwue0","hdfhew","hqidqhe")

// for(let i=0;i<list.length;i++){
//     console.log(list[i]);
// }

console.log("")

 let list2=list.concat(7,4,5);
// for(let i=0;i<list2.length;i++){
//     console.log(list2[i]);
// }

//using of the delete keyword

delete list[0];
// for(let i=0;i<list.length;i++){
//     console.log(list[i]);
// }


// using of find method on the array
const find1=list.find(e=>e=="banana");
console.log(find1)

// using of indexOf and lastIndexOf

const index=list.indexOf("banana");
const index1=list.lastIndexOf("banana");

console.log(index,index1)


// sort and reverse mathod in array

