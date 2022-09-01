const Contact = require('../models/Contact') //Declare variable Contact which will come from the Contact model
const Todo = require('../models/Todo')//For debugging purposes! Remove when done

module.exports = {
    getContacts: async (req,res)=>{
        // console.log(req.user)
        try{
            const contacts = await Contact.find({userId:req.user.id})
            const totalContacts = await Contact.countDocuments({})
            res.render('contacts.ejs', 
            {
                contactItems: contacts, 
                total: totalContacts, 
                user: req.user
            })
        }catch(err){
            console.log(err)
        }
    },
    //Reference Contact model. This is your POST request controller for creating a contact.
    createContact: async (req, res)=>{
        try{
            await Contact.create(
                {
                    firstName: req.body.firstName, 
                    lastName: req.body.lastName,
                    date: req.body.date,
                    companyName: req.body.companyName,
                    spark: req.body.spark,
                    email: req.body.email,
                    followUp: req.body.followUp,
                    addedOnLinkedIn: req.body.addedOnLinkedIn,
                    addedOnTwitter: req.body.addedOnTwitter,
                    dateContactCreated: req.body.dateContactCreated
                })
            console.log('Contact has been added!')
            res.redirect('/contacts')
        }catch(err){
            console.log(err)
        }
    },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    deleteContact: async (req, res)=>{
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