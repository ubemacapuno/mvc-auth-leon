const deleteBtn = document.querySelectorAll('.del')
const followUpIncomplete = document.querySelectorAll('#follow-up.incomplete')
const followUpComplete = document.querySelectorAll('#follow-up.complete')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteContact)
})

Array.from(followUpIncomplete).forEach((el)=>{
    el.addEventListener('click', markFollowUpComplete)
})

Array.from(followUpComplete).forEach((el)=>{
    el.addEventListener('click', markFollowUpIncomplete)
})

async function deleteContact(){
    const contactId = this.parentNode.dataset.id
    try{
        const response = await fetch('contacts/deleteContact', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'contactIdFromJSFile': contactId
            })
        })
        console.log("Anything other than")
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markFollowUpComplete(){
    const contactId = this.parentNode.dataset.id
    try{
        const response = await fetch('contacts/markFollowUpComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'contactIdFromJSFile': contactId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markFollowUpIncomplete(){
    const contactId = this.parentNode.dataset.id
    try{
        const response = await fetch('contacts/markFollowUpIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'contactIdFromJSFile': contactId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}