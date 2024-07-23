# Django ToDo App

This is a simple ToDo application built with Django for the backend and HTML, CSS, and Bootstrap for the frontend. SQLite is used as the RDBMS.

## Features

### Dashboard
- The main dashboard displays your tasks for the day on the left and completed tasks on the right.

![Dashboard](/toDo/assests/home.png)

### Task Management
- **Add a Task**: Enter a new task in the input field and click the "Add" button to include it in your list.
- **Mark as Done**: Use the "Mark as Done" button to move a task to the completed section.
- **Edit**: Click the pencil icon to modify a task.
- **Delete**: Use the trash can icon to remove a task.
- **Mark as Undone**: Move a completed task back to the active list with the "Mark as Undone" button.

## How to Use
1. **Add Tasks**: Type your task in the input field and click "+ Add".
2. **Complete Tasks**: Click "Mark as Done" to move tasks to the completed list.
3. **Edit or Delete**: Use the icons to edit or delete tasks as needed.
4. **Undo Completion**: Click "Mark as Undone" to revert completed tasks.

## Installation
1. Clone the repository.
2. Install dependencies with `pip install -r requirements.txt`.
3. Run migrations with `python manage.py migrate`.
4. Start the server with `python manage.py runserver`.

## License
This project is licensed under the MIT License.
