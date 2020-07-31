// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },
    markComplete: function() {
      task.complete = true;
    }
  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "pick up and pour out tray"); // task 0
const task2 = newTask("Do Laundry", "put laundry into washingMachine"); // task 1
const tasks = [task1, task2];


task1.logState(); // Clean Cat Litter has not been completed
task1.markComplete();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);










//==================================================

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title, description) {
//   const task = {
//     title: title,
//     description: description,
//     complete: false
//   };
//   return task;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }
// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {
//   task.complete = true;
// }


// // DRIVER CODE BELOW

// const task1 = newTask("Clean Cat Litter", "pick up and pour out tray"); // task 0
// const task2 = newTask("Do Laundry", "put laundry into washingMachine"); // task 1
// const tasks = [task1, task2];


// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed

// console.log(tasks);
