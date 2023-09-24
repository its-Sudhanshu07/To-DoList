// getting values from id and class
const inputBox=document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value ===''){
        const emoji = String.fromCodePoint(0x1F602);
        alert(`Omg!! Box remained Clean. Make it dirty First ${emoji}`)
        
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("Span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
    count();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
        count();
    }
},false);

// Save data so that even after refreshing, data will remain there.
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function count(){
    var count = listContainer.childElementCount;
    document.getElementById("countTask").innerHTML = count;
}

// Remove tasks from the list after checked or completed
function clearCompletedTasks() {
    var completedTasks = document.querySelectorAll("#list-container .checked");
    for (var i = 0; i < completedTasks.length; i++) {
      completedTasks[i].remove();
    }

    count();
  }
// Function to check all tasks
function checkAllTasks() {
    var taskItems = document.querySelectorAll('#list-container li');
    taskItems.forEach(function(taskItem) {
      taskItem.classList.add('checked');
    });
    count();
  }
// Function to uncheck all tasks
function uncheckAllTasks() {
     var taskItems = document.querySelectorAll('#list-container li');

    taskItems.forEach(function(taskItem) {
        taskItem.classList.remove('checked');
    });
    count();
}


// Attach event listeners
document.querySelector(".deleteAll").addEventListener("click", clearCompletedTasks);
document.querySelector('.completed').addEventListener('click', checkAllTasks);
document.querySelector('.incomplete').addEventListener('click', uncheckAllTasks);

function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();

