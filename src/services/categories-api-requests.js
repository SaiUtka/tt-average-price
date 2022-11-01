const getCategoriesRequest = () => {
    return fetch('http://test.teaching-me.org/categories/v1/categories', {
        headers: {
            'Accept-Language': 'en'
        }
    });
};

export {getCategoriesRequest};