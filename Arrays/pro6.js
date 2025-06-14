/*1. Create an object named people that contains an empty array that is called
friends.
2. Create three variables, each containing an object, that contain one of your
friend's first names, last names, and an ID value.
3. Add the three friends to the friend array.
4. Output it to the console.*/

let people={
    name:"ashu",
    friend:[]
}

let a1={
    firstName:"ashu",
    lastName:"jha",
    id:1
}

let a2={
    firstName:"suhani",
    lastName:"priya",
    id:2
}

let a3={
    firstName:"saurabh",
    lastName:"kushwaha",
    id:2
}

people.friend.push(a1)
people.friend.push(a2)
people.friend.push(a3)

console.log(people.friend)