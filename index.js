let submit=document.querySelector(".submit");
let title=document.getElementById("text");
let desc=document.getElementById("desc");
let noteElem=document.querySelector(".notes");
let notes=JSON.parse(localStorage.getItem("notes"));

if(notes){
    notes.forEach(element => {
        addNotes(element)
    });
}

console.log(title,desc);
submit.addEventListener("click",(e)=>{
e.preventDefault();
addNotes()
})

function addNotes(obj){
    let titleVal=title.value;
    let descVal=desc.value;
   
    if(obj){
        titleVal=obj.title;
        descVal=obj.desc;
    }

    let card=document.createElement("div");
    card.classList.add("card");
    
    if(titleVal){
    card.innerHTML=`
        <h3>${titleVal}</h3>
        <p class="ptag">${descVal}</p>
        <button class="del">Delete</button>`;
    noteElem.appendChild(card);
    updateLs();
    }
    let clear=card.querySelector(".del");
    clear.addEventListener("click", ()=>{
        card.remove();
        updateLs();
    })
function updateLs(){
    let card=document.querySelectorAll('.card')
    let arr=[];
    card.forEach(element => {
        arr.push({
            title:element.children[0].innerText,
            desc:element.children[1].innerText
        })
    });
    localStorage.setItem("nodes",JSON.stringify(arr));
}
}