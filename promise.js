const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve(1) //if it is resolved
        reject(new Error('Something went wrong'))
    }, 2000)
})

p.then(result => console.log('Result', result))
    .catch(err => console.log('Error', err.message))
