const getTeachersRequest = (category, pageSize) => {
    return fetch('http://test.teaching-me.org/categories/v1/search', {
        method: 'POST',
        headers: {
            'Accept-Language': 'en',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "categories": [category],
            "page": 0,
            "pageSize": pageSize
        })
    })
        .then(response => response.json());
};

export {getTeachersRequest};