const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req,res)=>{
        console.log("Reached controller for 'getTodos' ")
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
            await Todo.create(
                {
                    todo: req.body.todoItem, 
                    completed: false, 
                    userId: req.user.id, 
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    date: req.body.date,
                    companyName: req.body.companyName,
                    spark: req.body.spark,
                    email: req.body.email,
                    followUp: req.body.followUp,
                    addedOnLinkedIn: req.body.addedOnLinkedIn,
                    addedOnTwitter: req.body.addedOnTwitter,
                })
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log({_id:req.body.todoIdFromJSFile})
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log({_id:req.body.todoIdFromJSFile})
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },

    // markYesFollowUp, markNoFollowUp controllers

    markYesFollowUp: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                followUp: "Yes"
            })
            console.log({_id:req.body.todoIdFromJSFile})
            console.log('Marked Yes Follow Up')
            res.json('Marked Yes Follow Up')
        }catch(err){
            console.log(err)
        }
    },
    markNoFollowUp: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                followUp: "No"
            })
            console.log({_id:req.body.todoIdFromJSFile})
            console.log('Marked No Follow Up')
            res.json('Marked No Follow Up')
        }catch(err){
            console.log(err)
        }
    },

    // markYesLinkedin, markNoLinkedin controllers

    markYesLinkedin: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                addedOnLinkedIn: "Yes"
            })
            console.log({_id:req.body.todoIdFromJSFile})
            console.log('Marked Yes LinkedIn')
            res.json('Marked Yes LinkedIn')
        }catch(err){
            console.log(err)
        }
    },
    markNoLinkedin: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                addedOnLinkedIn: "No"
            })
            console.log({_id:req.body.todoIdFromJSFile})
            console.log('Marked No LinkedIn')
            res.json('Marked No LinkedIn')
        }catch(err){
            console.log(err)
        }
    },

    // markYesTwitter, markTwitter controllers

    markYesTwitter: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                addedOnTwitter: "Yes"
            })
            console.log({_id:req.body.todoIdFromJSFile})
            console.log('Marked Yes Twitter')
            res.json('Marked Yes Twitter')
        }catch(err){
            console.log(err)
        }
    },
    markNoTwitter: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                addedOnTwitter: "No"
            })
            console.log({_id:req.body.todoIdFromJSFile})
            console.log('Marked No Twitter')
            res.json('Marked No Twitter')
        }catch(err){
            console.log(err)
        }
    },

    // delete controller

    deleteTodo: async (req, res)=>{
        console.log("You have reached controller for deleteTodo")
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    