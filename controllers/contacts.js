const Contact = require('../models/Contact') //Declare variable Contact which will come from the Contact model
// const Todo = require('../models/Todo')

module.exports = {

    //This is the GET/Read request controller for grabbing contacts from db (contactItems: contacts)
    //and for grabbing the total from db (total: totalContacts)
    getContacts: async (req,res)=>{
        // console.log(req.user)
        try{
            const contacts = await Contact.find({}) //If you pass {}, then it grabs ALL the 'objects' in Contact db
            const totalContacts = await Contact.countDocuments({}) //If you pass {}, then it counts ALL objects in db
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

    //Reference Contact model. This is the POST request controller for creating a contact.
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

    //PUT/Update for switching followUp to "Yes"
    markFollowUpComplete: async (req, res)=>{
        try{
            const id = {_id:req.body.todoIdFromJSFile}
            await Contact.findOneAndUpdate(id,{
                followUp: "Yes"
            })
            console.log('followUp marked "Yes"')
            res.json('followUp marked "Yes"')
        }catch(err){
            console.log(err)
        }
    },

    //PUT/Update for switching followUp to "No"
    markFollowUpIncomplete: async (req, res)=>{
        try{
            const id = {_id:req.body.todoIdFromJSFile}
            await Contact.findOneAndUpdate(id,{
                followUp: "No"
            })
            console.log({_id:req.body.todoIdFromJSFile})
            console.log('followUp marked "No"')
            res.json('followUp marked "No"')
        }catch(err){
            console.log(err)
        }
    },

    //DELETE Contact
    deleteContact: async (req, res)=>{
        console.log(req.body.contactIdFromJSFile)
        try{
            await Contact.findOneAndDelete({_id:req.body.contactIdFromJSFile})
            console.log('Deleted Contact')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    