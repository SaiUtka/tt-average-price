const postAveragePriceRequest = (body) => {
    return fetch('http://test.teaching-me.org/categories/v1/average-price', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}

export {postAveragePriceRequest};