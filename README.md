# 🗂️ Task Manager (Node.js Beginner Assessment)

A simple CLI-based and HTTP-based **Task Manager** built with **Node.js**, designed to help beginners understand core Node.js concepts including modules, file system operations, JSON handling, and server creation.

---

## 🚀 Project Overview

This project tests your understanding of:

- Node.js Modules (built-in and custom)

- File System operations (read/write)
- JSON data manipulation
- Creating a basic HTTP server
- Command-line interactions
- Error handling
- Using `package.json`

---

## 🧱 Project Structure

```bash
task-manager/
├── package.json # Project metadata and dependencies
├── app.js # Main CLI & server logic
├── taskManager.js # Custom module for task operations
└── tasks.json # Task data storage (as JSON)

```

---

## 🛠️ Setup Instructions

1. Clone the repository or create the project directory

2. Initialize Node.js:
   ```bash
   npm init -y
   ```
3. Create the file structure as shown above.
4. Run the application using:

   ```bash
   node app.js [command]
   ```

## 🧩 Features

- `addTask(title, description)` – Add a new task

- `getAllTasks()` – Get all tasks
- `markTaskComplete(taskId)` – Mark a task as completed
- `deleteTask(taskId)` – Delete a task by ID
- `saveTasksToFile()` – Save tasks to tasks.json
- `loadTasksFromFile()` – Load tasks from tasks.json

## 📋 Task Object Structure

```json
{
  "id": 1,
  "title": "Learn Node.js",
  "description": "Complete the beginner tutorial",
  "completed": false,
  "createdAt": "2025-05-27T10:30:00.000Z"
}
```

## 💻 Command-Line Usage

```bash
# Add a new task
node app.js add "Buy groceries" "Milk, bread, eggs"

# List all tasks
node app.js list

# Mark a task as completed
node app.js complete 1

# Delete a task
node app.js delete 2

# Start HTTP server
node app.js server
```

## 🌐 HTTP Server Usage

When you run:

```yaml
node app.js server
```

The server starts on `http://localhost:3000` with the following endpoints:

| Method | Endpoint | Description                |
| ------ | -------- | -------------------------- |
| GET    | /        | Welcome message            |
| GET    | /tasks   | Retrieve all tasks (JSON)  |
| POST   | /tasks   | Add a new task (JSON body) |

## 🧪 Sample Output

### ✅ Task Added

```bash
✓ Task added successfully!
ID: 1, Title: "Buy groceries"
```

### 📄 Task List

```bash

=== Your Tasks ===

[1] Buy groceries (Pending)
    Description: Milk, bread, eggs
    Created: 2025-05-27 10:30 AM

[2] Learn Node.js (Completed ✓)
    Description: Complete the beginner tutorial
    Created: 2025-05-27 09:15 AM
```

## ⚠️ Error Handling

The application handles:

- File read/write errors

- Missing/invalid command arguments
- Non-existent task IDs
- Malformed JSON data
- Server and route errors

## 📚 Learning Objectives Recap

- ✅ Node.js module system

- ✅ JSON file storage and manipulation
- ✅ File system read/write operations
- ✅ Building a CLI-based app with process.argv
- ✅ Creating a basic HTTP server with http module
- ✅ Writing reusable and testable code with validation and error handling

## 🧑‍💻 Author

This project is part of a beginner assessment for learning Node.js and understanding how to build real-world CLI and server-based applications.

## 📄 License

This project is open for learning purposes. Feel free to use and modify for educational goals.
