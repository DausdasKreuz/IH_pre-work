
window.onload = function() {

  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    var itemToDo = document.createElement('li');
    var input = document.getElementById('todo-input').value;
    itemToDo.textContent = input;
    document.getElementsByClassName('todo-list-items')[0].appendChild(itemToDo);
  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";
    var textDone = (document.getElementsByTagName('li')[0].textContent);
    var itemDone = document.createElement('li');
    itemDone.className = 'done';
    itemDone.textContent = textDone;
    document.getElementsByClassName('done-list-items')[0].appendChild(itemDone);
    document.getElementsByClassName('todo-list-items')[0].removeChild(document.getElementsByTagName('li')[0]);
  }
  
}
