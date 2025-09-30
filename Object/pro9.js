// Write a function groupByPost(comments) that returns an object grouping comments by postId:

const comments = [{
    postId: 1,
    text: "its a great post of one "
},
{
    postId: 2,
    text: "its a great post two"
},
{
    postId: 2,
    text: "its a great post two second"
},
{
    postId: 1,
    text: "its a great post one second"
}]

let newComment=comments.reduce((acc,curr)=>{
     acc[curr.postId]=acc[curr.postId]===undefined?[curr.text]:[...acc[curr.postId],curr.text];
     return acc;
},{})

console.log(newComment)