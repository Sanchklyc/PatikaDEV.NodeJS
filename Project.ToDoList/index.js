let toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
let warningText = document.getElementById("warningText");
let parentUlElement = document.getElementById("myUL");
let inputElement = document.getElementById("myInput");
let toastBody = document.getElementById("toast-body");

const fillScreen = () => {
  if (toDoList.length <= 0) {
    warningText.style.display = "block";
  } else {
    warningText.style.display = "none";
  }
  parentUlElement.innerHTML = "";
  toDoList.forEach((toDo) => {
    let liElementString = `<li> ${toDo} <span class="text-right" onClick="removeElement('${toDo.toString()}')"> X </span> </li>`;
    parentUlElement.innerHTML += liElementString;
  });
};

fillScreen();

const newElement = () => {
  let toDo = inputElement.value;
  if (toDo == "") {
    toastBody.innerHTML = 'You can not add empty todo.';
    $("#liveToast").toast("show");
    return;
  }
  if (toDoList.includes(toDo)) {
    toastBody.innerHTML = 'You already added this todo.';
    $("#liveToast").toast("show");
    return;
  }
 
  toDoList.push(toDo);
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  fillScreen();
  toastBody.innerHTML = 'You successfully added this todo.';
  $("#liveToast").toast("show");
};

const removeElement = (e) => {
   toDoList = toDoList.filter(toDo => toDo != e);
   localStorage.setItem("toDoList", JSON.stringify(toDoList));
   fillScreen();
   toastBody.innerHTML = 'You successfully removed this todo.';
  $("#liveToast").toast("show");
}