const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')

//DOM access for markYesFollowUp, markNoFollowUp
const noFollowUp = document.querySelectorAll('span.no-follow-up')
const yesFollowUp = document.querySelectorAll('span.yes-follow-up')

//DOM access for markYesLinkedin, markNoLinkedin
const noLinkedin = document.querySelectorAll('span.no-linkedin')
const yesLinkedin = document.querySelectorAll('span.yes-linkedin')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

//Event Listeners for markYesFollowUp, markNoFollowUp
Array.from(yesFollowUp).forEach((el)=>{
    el.addEventListener('click', markNoFollowUp)
})

Array.from(noFollowUp).forEach((el)=>{
    el.addEventListener('click', markYesFollowUp)
})

//Event Listeners for markYesLinkedin, markNoLinkedin
Array.from(yesLinkedin).forEach((el)=>{
    el.addEventListener('click', markNoLinkedin)
})

Array.from(noLinkedin).forEach((el)=>{
    el.addEventListener('click', markYesLinkedin)
})

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// markYesFollowUp, markNoFollowUp functions

async function markYesFollowUp(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markYesFollowUp', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markNoFollowUp(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markNoFollowUp', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// markYesLiknedin, markNoLinkedin functions

async function markYesLinkedin(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markYesLinkedin', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markNoLinkedin(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markNoLinkedin', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}