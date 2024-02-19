const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

// for add and delete

function addTask(){
    if(inputBox.value ===''){
        alert("you must write something");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);


    }
    inputBox.value= "";
    saveData();
}

//  for checked or unchecked

listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false);


// for store

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//for displaying data

function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();