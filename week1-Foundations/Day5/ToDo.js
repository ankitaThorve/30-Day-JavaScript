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
  viewTask();
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
