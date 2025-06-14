/*Take the following array:
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
Manipulate your array using various methods, such as pop(), push(), shift(), and
unshift(), and transform it into the following:
["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"] */

let list=['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
list.shift()
list.unshift("FIRST")
list.splice(2,list.length-2,"MIDDLE","HELLO WORLD","LAST")
console.log(list)