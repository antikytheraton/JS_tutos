const  fetch = function(url) {
    return new Promise((resolve, reject) => {
        request((error, apiResponse) => {
            if (error) {
                reject(error)
            }
            resolve(apiResponse)
        })
    })
}
