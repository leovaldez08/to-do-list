var listOfActivities = [];

var input = document.getElementById('input');

var toDoList = document.getElementById('todolist');

document.getElementById('button').onclick = () => {
  listOfActivities.push(input.value);
  console.log(listOfActivities);
};
