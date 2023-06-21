const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db')

// middleware
app.use(cors());
app.use(express.json());


app.listen(5000, ()=>{
  console.log('Server running at port 5000');
})

// @route   POST /tasks
// @desc    Create a new task
// @access  Public
app.post('/tasks' , (req, res)=>{
  try {
    const { description } = req.body;
    const newTask = pool.query("INSERT INTO task (description) VALUES($1)", [description])
    console.log(req.body);
    res.json(newTask);
  } catch (err) {
    console.error(err.message);
  }
})

// @route   GET /tasks
// @desc    Get all tasks
// @access  Public
app.get('/tasks' , async(req,res)=>{
  try {
    const allTasks = await pool.query("SELECT * FROM task");
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// @route   GET /tasks/:id
// @desc    Get a single task
// @access  Public
app.get('/tasks/:id' , async(req,res)=>{
  try {
    const { id } = req.params;
    const task = await pool.query("SELECT * FROM task WHERE todo_id = $1" , [id])
    res.json(task.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})


// @route   PUT /tasks/:id
// @desc    Update a task
// @access  Public
app.put("/tasks/:id" , async (req,res) => {
  try {
    const {id} = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query("UPDATE task SET description = $1 WHERE todo_id = $2", [description, id]);
    res.json('Task was updated')
  } catch (err) {
    console.error(err.message);
  }
})

// @route   DELETE /tasks/:id
// @desc    Delete a task
// @access  Public
app.delete('/tasks/:id', async (req,res) => {
  try {
    const { id } = req.params;
    const deleteTask = await pool.query("DELETE FROM task WHERE todo_id = $1" , [id])
    res.json("Task was deleted");
  } catch (err) {
    console.error(err.message);
  }
})