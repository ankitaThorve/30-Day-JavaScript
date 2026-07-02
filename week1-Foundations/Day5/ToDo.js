// Initialize the storage array
let todos = [];
// Add task function - using push()
function addTask(taskName) {
  if (!taskName || typeof taskName !== "string") {
    console.log("❌Please provide a valid task name.");
  }

  const newTask = {
    id: todoList.length + 1,
    task: taskName,
    completed: false,
  };

  todoList.push(newTask);
  console.log(`✅ Added: ${taskName}`);
  viewTasks();
}

// View task function - using map()
function viewTasks() {
  if (todoList.length === 0) {
    console.log("📃Your to-do list is currently empty.");
    return;
  }
  console.log("\n-----My ToDo List-----");

  // .map() creates a new array of formatted strings for displaying
  const formattedList = todoList.map((item) => {
    const statusIcon = item.completed ? "🟢[DONE]" : "🔴[TODO]";
    return `ID: ${item.id}: ${statusIcon} - ${item.task}`;
  });

  // Print each formatted string line by line
  formattedList.forEach((line) => {
    console.log("------------------\n");
  });
}

// Complete Task function - using map()
function toggleComplete(id) {
  let found = false;
  // .map() updates the completed property for the matching ID
  todoList = todoList.map((item) => {
    if (item.id === id) {
      found = true;
      return { ...item, completed: !item.completed };
    }
    return item;
  });

  if (found) {
    console.log(`🔄️ Toggled task status for ID: ${id}`);
  } else {
    console.log(`❌ Task with ID ${id} not found.`);
  }
  viewTasks();
}

// Delete task function - using filter()
function deleteTask(id) {
  const originalLength = todoList.length;

  // .filter() keeps only the elements that do NOT match the target ID
  todoList = todoList.filter((item) => item.id !== id);

  if (todoList.length < originalLength) {
    console.log(`🗑️ Removed task with ID: ${id}`);
  } else {
    console.log(`❌ Task with ID ${id} not found`);
  }
  viewTasks();
}

// Clear completed task function - using filter()
function clearCompleted() {
  todoList = todoList.filter((item) => !item.completed);
  console.log("🧹Cleared all completed tasks.");
  viewTasks();
}
