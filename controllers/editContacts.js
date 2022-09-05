//CRUD operations regarding the "editContacts" route
const Todo = require('../models/Todo')

module.exports = {
    getEditContact: async (req,res)=>{
        console.log("Reached controller for 'getEditContact' ")
        console.log(req.user)
        try{
            const id = req.params.id;
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id})
            res.render('editContacts.ejs', {todos: todoItems, user: req.user, idContact: id})
        }catch(err){
            console.log(err)
        }
    },
    // deleteContact: (req,res) => {
    //     const id = req.params.id
    //     TodoTask.findByIdAndRemove(id, err => {
    //         if (err) return res.status(500).send(err)
    //         res.redirect('/')
    //     })
    // },
    updateContact: (req, res) => {
        const id = req.params.id;
        Todo.findByIdAndUpdate(//mongoose method
            id,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                companyName: req.body.companyName,
                spark: req.body.spark
            },
            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/");
            })
        }
}