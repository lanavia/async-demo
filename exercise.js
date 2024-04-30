getCustomer(1, (customer) => {
    console.log('Customer:', customer)
    if (customer.isGold) {
        getTopMovies((movies) => {
            sendEmail(customer.email, movies, () => {
                console.log('Email sent ...')
            })
        })
    }
})

function getCustomer(id, callback) {
    setTimeout(() => {
        callback({
            id=1,
            name: 'Mosh Hamedani',
            isGold: true
        })
    })
}