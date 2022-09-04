const Memo = require('../models/Memo')

module.exports = {
    //Get Memo Controller, render memo.ejs view
    getMemos: async (req,res)=>{
        console.log(req.user)
        try{
            const memoItems = await Memo.find({userId:req.user.id})
            const memosLeft = await Memo.countDocuments({userId:req.user.id})
            res.render('memos.ejs', {memos: memoItems, left: memosLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    //Post Memo Controller
    addMemo: async (req, res)=>{
        try{
            await Memo.create(
                {
                    memo: req.body.memoItem,
                    typeOfConnection: req.body.memoConnection,
                    dateOfConnection: req.body.memoDate
                })
            console.log('Memo has been added!')
            res.redirect('/memos')
        }catch(err){
            console.log(err)
        }
    },
    //Put Memo Controller
    updateMemo: async (req, res) => {
        const id = req.params.id;
        await Memo.findByIdAndUpdate(
            id,
            {
                memo: req.body.memoItem,
                typeOfConnection: req.body.memoConnection,
                dateOfConnection: req.body.memoDate
            },

            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/memos");
            })
        }
    // Delete Memo controller
    deleteMemo: async (req, res)=>{
        console.log(req.body.memoIdFromJSFile)
        try{
            await Memo.findOneAndDelete({_id:req.body.memoIdFromJSFile})
            console.log('Removed memo')
            res.json('Removed memo')
        }catch(err){
            console.log(err)
        }
    }
}