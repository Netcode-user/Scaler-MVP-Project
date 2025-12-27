function addTask() {
  const task = document.getElementById("taskInput").value;
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  document.getElementById("taskList").appendChild(li);
  document.getElementById("taskInput").value = "";
}
