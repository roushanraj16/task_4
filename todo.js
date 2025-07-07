const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

document.addEventListener("DOMContentLoaded", loadTasks);

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    taskInput.value = "";
    saveTasks();
  }
});

function addTask(text, completed = false) {
  const li = document.createElement("li");
  if (completed) li.classList.add("completed");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "🗑️";

  span.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTasks();
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.append(span, deleteBtn);
  taskList.appendChild(li);
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#task-list li").forEach((li) => {
    tasks.push({
      text: li.querySelector(".task-text").textContent,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
  saved.forEach((task) => addTask(task.text, task.completed));
}
