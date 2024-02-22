console.log('Before')
getUser(1, function (user) {
    getRepositories(user.gitHubUsername, (repositories) => {
        console.log(repositories)
    })
})
console.log('After')


function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from DB ..')
        callback({ id: id, gitHubUsername: 'lanavia' })

    }, 2000)
    return 1

}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log("getting GitHub Repositories")
        callback(['repo1', 'repo2', 'repo3'])

    }, 2000)
}