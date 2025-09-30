const div=document.getElementById("box")
const add=document.getElementById("add")

// function addDiv(){
//     const div=document.createElement("div")
//     div.setAttribute("id","box")
//     add.appendChild(div)
// }

// div.addEventListener("click",addDiv)


// const input=document.getElementById("input")


// input.addEventListener("input",()=>{
//     console.log(e)
// })

const form=document.getElementById("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const data=new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
    for(const p of data){
        console.log(p)
    }
    console.log(data)
})

