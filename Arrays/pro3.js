// step1 create an empty array list

let list=[];

//step2: add milk bread and apple to your list

list.push("milk");
list.push("bread");
list.push("apple");

//step3: update bread with banana and eggs;

list.splice(1,1,"banana","eggs");

//step4: 4. Remove the last item from the array and output it into the console.

list.pop();
console.log(list);
console.log()

//step5: 5. Sort the list alphabetically.

list.sort();

//step6: 6. Find and output the index value of Milk.

console.log(list.indexOf("milk"))

//step7: 7. After Bananas, add Carrots and Lettuce.

list.splice(1,0,"carrot","lettuce");

//step8: 8. Create a new list containing Juice and Pop.

let list2=["juice","pop"];

//step9: 9. Combine both lists, adding the new list twice to the end of the first list.

list=list.concat(list2);

console.log(list);
console.log("")

//step10:10. Get the last index value of Pop and output it to the console.

let index=list.lastIndexOf("pop");
console.log(index);

//step11:11. Your final list should look like this:

console.log(list)