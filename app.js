import http from 'http';
import {
  addTask,
  deleteTask,
  getAllTasks,
  markTaskComplete,
} from './taskManager.js';
import process from 'process';

const PORT = 3000;
const processArgvs = process.argv;
const operation = processArgvs[2];

if (operation === 'add') {
  const title = processArgvs[3];
  const description = processArgvs[4];
  const { id, title: taskTitle } = await addTask(title, description);
  console.log(
    `Adding a task:\n✓ Task added successfully!\nID: ${id}, Title: ${taskTitle}`
  );
}

if (operation === 'list') {
  const tasks = await getAllTasks();
  console.log('Listing tasks:\n=== Your Tasks ===');
  tasks.reverse().map((task, index) => {
    const { _, title, description, completed, createdAt } = task;
    const [date, time] = createdAt.split('T');
    const [hour, minutes] = time.split(':');
    const meridiem = hour >= 12 ? 'PM' : 'AM';
    const taskStatus = completed ? 'Completed ✓' : 'Pending';

    console.log(
      `[${index}]\t${title} (${taskStatus})\n\tDescription: ${description}\n\tCreated: ${date} ${
        meridiem === 'PM' ? hour - 12 : hour
      }:${minutes} ${meridiem}
      ${index - 1 < 0 ? '\n\n' : ''}`
    );
  });
}

if (operation === 'complete') {
  const taskId = processArgvs[3];
  await markTaskComplete(taskId);
}

if (operation === 'delete') {
  const taskId = processArgvs[3];
  await deleteTask(taskId);
}

if (operation === 'server') {
  const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
      res.writeHead(200, {
        'content-type': 'text/plain',
      });
      res.end('Welcome to Node.js Beginner Assessment Task!');
    } else if (req.method === 'GET' && req.url === '/tasks') {
      const tasks = await getAllTasks();
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify(tasks));
    } else if (req.method === 'POST' && req.url === '/tasks') {
      let body = '';

      req.on('data', chunk => {
        body += chunk.toString();
      });

      req.on('end', async () => {
        const { title, description } = JSON.parse(body);
        const newTask = await addTask(title, description);
        res.writeHead(201, { 'content-type': 'application/json' });
        res.end(JSON.stringify(newTask));
      });
    }
  });
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
