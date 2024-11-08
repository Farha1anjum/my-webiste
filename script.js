let taskList = [];

document.getElementById('add-task').addEventListener('click', () => {
    const task = document.getElementById('task').value;
    if (task !== '') {
        taskList.push({ text: task, done: false });
        renderTaskList();
        document.getElementById('task').value = '';
    }
});

document.getElementById('task-list').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const taskIndex = taskList.findIndex((task) => task.text === e.target.textContent);
        taskList[taskIndex].done = !taskList[taskIndex].done;
        renderTaskList();
    }
});

function renderTaskList() {
    const taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = '';
    taskList.forEach((task) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.text;
        if (task.done) {
            taskElement.classList.add('done');
        }
        taskListElement.appendChild(taskElement);
    });
}

