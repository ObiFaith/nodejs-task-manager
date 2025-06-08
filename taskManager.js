import { readFile, writeFile } from 'fs/promises';

const jsonFilePath = './tasks.json';

// Loads tasks from tasks.json
export const loadTasksFromFile = async () => {
  try {
    const filePath = new URL(jsonFilePath, import.meta.url);
    const tasks = await readFile(filePath, { encoding: 'utf-8' });
    return JSON.parse(tasks);
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

let tasks = await loadTasksFromFile();

// Returns all tasks
export const getAllTasks = async () => tasks;

// Saves tasks to tasks.json
export const saveTasksToFile = async () => {
  await writeFile(jsonFilePath, JSON.stringify(tasks), 'utf-8', err => {
    if (err) {
      console.error("ERROR: Couldn't save tasks to file");
      return;
    }
    console.log('Tasks saved to file successfully!');
  });
};

// Adds a new task
export const addTask = async (title, description) => {
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    completed: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  await saveTasksToFile();
  return newTask;
};

// Marks a task as completed
export const markTaskComplete = async taskId => {
  const task = tasks.find(task => task.id == taskId);
  task.completed = true;
  await saveTasksToFile();
};

// Removes a task
export const deleteTask = async taskId => {
  tasks = tasks.filter(task => task.id != taskId);
  await saveTasksToFile();
};
