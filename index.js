console.log('Before')
/* getUser(1, function (user) {
    getRepositories(user.gitHubUsername, (repositories) => {
        console.log(repositories)
        getCommits(repositories[0], (commits) => {
            console.log(commits)
        })
    })
}) */
console.log('After')

getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits ', commits))
    .catch(err => console.log("Error", err.message))

function getUser(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Reading a user from DB ..')
            resolve({ id: id, gitHubUsername: 'lanavia' })

        }, 2000)
    })

}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getting GitHub Repositories")
            resolve(['repo1', 'repo2', 'repo3'])

        }, 2000)
    })
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getting GitHub Repositories")
            resolve(['repo1', 'repo2', 'repo3'])

        }, 2000)
    })
}
