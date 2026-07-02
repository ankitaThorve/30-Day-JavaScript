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
