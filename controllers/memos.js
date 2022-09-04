const Memo = require('../models/Memo')

module.exports = {

    //Get Memo Controller, render memo.ejs view
    getMemos: async (req,res)=>{
        console.log("You have reached controller for getMemos")
        console.log(req.user)
        try{
            const id = req.params.id
            const memoItems = await Memo.find({userId:req.user.id})
            const memosLeft = await Memo.countDocuments({userId:req.user.id})
            res.render('memos.ejs', {memos: memoItems, left: memosLeft, user: req.user, idMemo: id})
        }catch(err){
            console.log(err)
        }
    },

    //Post Memo Controller
    addMemo: async (req, res)=>{
        console.log("You have reached controller for addMemos")
        try{
            await Memo.create(
                {
                    memo: req.body.memo,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    typeOfConnection: req.body.typeOfConnection,
                    dateOfConnection: req.body.dateOfConnection,
                    highPoints: req.body.highPoints,
                    userId: req.user.id, 
                })
            console.log('Memo has been added!')
            res.redirect('/memos')
        }catch(err){
            console.log(err)
        }
    },
    // Delete Memo controller
    deleteMemo: async (req, res)=>{
        console.log("You have reached controller for deleteMemo")
        console.log(req.body.memoIdFromJSFile)
        try{
            await Memo.findOneAndDelete({_id:req.body.memoIdFromJSFile})
            console.log('Removed memo')
            res.json('Removed memo')
        }catch(err){
            console.log(err)
        }
    }
    //Delete controller from Mayan Wolfe MVC - maybe try this?
    // deleteMemo: (req, res)=>{
    //     const id = req.params.id
    //     Memo.findByIdAndRemove(id, err => {
    //         if (err) return res.status(500).send(err)
    //         res.redirect('/')
    //     })
    // }
}