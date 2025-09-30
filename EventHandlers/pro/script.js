const container=document.querySelector('.container')

container.addEventListener("click",(e)=>{
    e.target.remove()
})


function makingCard(id){
    const div=document.createElement("div")
    div.classList.add("card")
    div.innerHTML=`${id}`
    
    // this should not be used because it drasticaaly reduce the performance

    // div.addEventListener("click",()=>{
    //     div.remove()
    // })
    container.appendChild(div)

}

for(let i=0;i<20;i++){
    makingCard(i)
}
