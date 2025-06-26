let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    
    li.appendChild(delbtn);
    ul.appendChild(li);
    inp.value = "";
})


ul.addEventListener("click", function (event) {
    if(event.target.nodeName = "delete"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete!")
    }
})



