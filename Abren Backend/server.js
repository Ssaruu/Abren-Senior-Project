//creating express app
const express = require('express')
const { default: mongoose } = require('mongoose')
//Mongoose
const Mongoose= require('mongoose')
//importing usermodel
const User = require('./models/UserModel')
const Task = require('./models/TasksModel')
//const user = require('./models/UserModel')
const bcrypt = require('bcrypt')


const app = express()

app.use(express.json())
//save a product




app.post('/Register', async (req, res) => {
    try {
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(req.body.password,10)

      const createdUser = await User.create({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
        role: req.body.role});
      res.status(200).json(createdUser);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });


  app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//connecting database
mongoose.set ("strictQuery", false)
Mongoose.connect('mongodb://Nardos:abren@ac-riqkozk-shard-00-00.lwwhemg.mongodb.net:27017,ac-riqkozk-shard-00-01.lwwhemg.mongodb.net:27017,ac-riqkozk-shard-00-02.lwwhemg.mongodb.net:27017/?ssl=true&replicaSet=atlas-b723xp-shard-0&authSource=admin&retryWrites=true&w=majority')
.then(() => {
    console.log('connected to mongodb')
    app.listen(3000, ()=> {
    console.log("Node API app is running on 3000")
})
   
}).catch((error) => {
    console.log(error)
})
 