var listOfActivities = [];

var input = document.getElementById('input');

var toDoList = document.getElementById('todolist');

document.getElementById('button').onclick = () => {
  listOfActivities.push(input.value);
  console.log(listOfActivities);
  input.value = ""

  showList();
}

function showList() {
  toDoList.innerHTML = "";

  listOfActivities.forEach(function(n, i){
    toDoList.innerHTML += "<li>" + n + 
    "<a onclick='edititem(" + i +
    ")'>Edit</a>" +
    "<a onclick='deleteitem(" + i +
    ")'>&times | <a/></li>";
  });
}

function deleteitem(i) {
  listOfActivities.splice(i, 1);

  showList();
}

function edititem(i) {
  var newvalue = prompt("Please insert your new value");
  listOfActivities.splice(i, 1, newvalue);

  showList();
}


