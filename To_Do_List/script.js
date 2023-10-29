// Retrieve tasks from local storage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task");
    const newTask = taskInput.value.trim();
    if (newTask !== "") {
        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
        displayTasks();
    }
}

// Function to edit a task
function editTask(index) {
    const updatedTask = prompt("Edit task:", tasks[index]);
    if (updatedTask !== null) {
        tasks[index] = updatedTask.trim();
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
    }
}

displayTasks();
