// TODO: Export these validation functions

// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
    if (!title)
        return "Title required!"
    if (title.length >= 3)
        return true

}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
    const priorities=["LOW","MEDIUM","HIGH"]
    let result=priorities.includes(priority)
    if(result===false)
        return "Invalid Priority"
    return true;
}

// 3. Validate due date (must be future date)
function validateDueDate(date) {
    let dueDate=new Date('2024-10-12') //yyyy-mm-dd
    let today=new Date()
    if(dueDate>today)
        return "Invalid dueDate"
    return true;

}

export { validateTitle, validatePriority, validateDueDate }