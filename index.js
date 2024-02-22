console.log('Before')
getUser(1, function (user) {
    console.log('User', user)
})
console.log('After')

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from DB ..')
        callback({ id: gitHubUsername, user: 'lanavia' })

    }, 2000)
    return 1

}