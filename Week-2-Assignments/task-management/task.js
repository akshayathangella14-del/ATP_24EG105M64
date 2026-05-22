// TODO: Import validator functions
import { validateTitle, validatePriority, validateDueDate } from './validator.js';

const tasks = [];

// 1. Add new task
function addTask(title, priority, dueDate) {
    if(!validateTitle(title) || !validatePriority(priority) || !validateDueDate(dueDate))
        return "Invalid Task"
    tasks.push({title,priority,dueDate})
    return true
}

// 2. Get all tasks
function getAllTasks() {
    return tasks
}

// Export functions
export {addTask,getAllTasks}