// Define a type for a task
type Task = {
    id: number;
    title: string;
    completed: boolean;
};

// Create an array to hold tasks
let tasks: Task[] = [];

// Function to add a new task
function addTask(title: string): void {
    const newTask: Task = {
        id: tasks.length + 1,
        title,
        completed: false,
    };
    tasks.push(newTask);
    console.log(`Added: ${title}`);
}

// Function to mark a task as completed
function completeTask(id: number): void {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = true;
        console.log(`Task "${task.title}" marked as completed.`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Function to list all tasks
function listTasks(): void {
    console.log("\nTo-Do List:");
    tasks.forEach(task => {
        const status = task.completed ? "✅" : "❌";
        console.log(`${task.id}. ${task.title} - ${status}`);
    });
}

// Example usage
addTask("Buy groceries");
addTask("Finish TypeScript tutorial");
completeTask(1);
listTasks();
